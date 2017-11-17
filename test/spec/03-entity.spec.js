/* eslint-disable */


describe('Entity API', function () {
  var ds;

  before(function (done) {
    wakClient.getCatalog().then(function (ds_) {
      ds = ds_;
      done();
    });
  });

  describe('save method', function () {

    it('sould be defined', function () {
      var entity = ds.Product.create();
      expect(entity.save).to.be.a('function');
    });

    it('should return a promise', function () {
      var entity = ds.Product.create();
      expect(entity.save()).to.be.a('promise');
    });

    it('should return the same entity object', function () {
      var entity = ds.Product.create();

      return entity.save().then(function (e) {
        expect(entity === e).to.equals(true);
      });
    });

    it('should fill the _key property for a newly created entity', function () {
      return ds.Product.create().save().then(function (e) {
        expect(e._key).to.be.a('string');
      });
    });

    it('should fill the _stamp property for a newly created entity', function () {
      return ds.Product.create().save().then(function (e) {
        expect(e._stamp).to.be.a('number');
      });
    });

    it('should update the _stamp for an existing entity', function () {
      return ds.Product.query({ pageSize: 1 })
        .then(function (collection) {
          return collection.entities[0];
        })
        .then(function (entity) {
          var originalStamp = entity._stamp;
          entity.myBoolean = !entity.myBoolean;

          return entity.save().then(function () {
            expect(entity._stamp).to.be.above(originalStamp);
          });
        });
    });

    it('should store the given attributes', function () {
      var entity = ds.Product.create({
        name: 'FooProduct',
        myBoolean: true,
        spec: {
          foo: 'bar',
          number: 1234,
          subObject: {
            baz: 'taz'
          }
        }
      });

      return entity.save()
        .then(function () {
          expect(entity.ID).to.be.a('number');
          expect(entity.name).to.be.equal('FooProduct');
          expect(entity.myBoolean).to.equals(true);
          expect(entity.spec).to.be.an('object');
          expect(entity.spec.foo).to.be.equal('bar');
          expect(entity.spec.number).to.be.equal(1234);
          expect(entity.spec.subObject).to.be.an('object');
          expect(entity.spec.subObject.baz).to.be.equal('taz');
        });
    });

    it('should store related entity', function () {

      return ds.Company.query({ pageSize: 1 })
        .then(function (companies) {
          return companies.entities[0];
        })
        .then(function (company) {
          var entity = ds.Employee.create({
            firstName: 'John',
            lastName: 'Smith',
            salary: 80000,
            employer: company
          });

          return entity.save().then(function () {
            expect(entity.employer).to.be.an('object');
            expect(entity.employer._key).to.be.equal(company._key);
            expect(entity.employerName).to.be.equal(company.name);
          });
        });
    });

    it('should unlink related entity by passing a null value', function () {
      return ds.Employee.query({ pageSize: 1, filter: 'employer.ID > 0' })
        .then(function (collection) {
          return collection.entities[0];
        })
        .then(function (employee) {
          employee.employer = null;
          return employee.save();
        })
        .then(function (employee) {
          expect(employee.employer).to.equals(null);
        });
    });

    it('should successfuly update an object attribute', function () {
      return ds.Product.query({ pageSize: 1, start: 5 })
        .then(function (products) {
          return products.entities[0];
        })
        .then(function (product) {
          product.spec = { foo: 'bar' };
          return product.save()
            .then(function () {
              product.spec.baz = 1136;
              return product.save().then(function () {
                return ds.Product.find(product.ID).then(function (_product) {
                  expect(product.spec).to.be.an('object');
                  expect(JSON.stringify(product.spec)).to.be.equal(JSON.stringify({ foo: 'bar', baz: 1136 }));

                  expect(_product.spec).to.be.an('object');
                  expect(JSON.stringify(_product.spec)).to.be.equal(JSON.stringify({ foo: 'bar', baz: 1136 }));
                });
              });
            });
        });
    });

    it('should not expand "not expanded" related entity attributes on update', function () {
      return ds.Employee.query({ pageSize: 1, start: 10 })
        .then(function (employees) {
          return employees.entities[0];
        })
        .then(function (employee) {
          employee.firstName = 'Arnaud';
          return employee.save()
            .then(function () {
              expect(employee.employer._deferred).to.equals(true);
              expect(employee.employer.name).to.equals(undefined);
            });
        });
    });

    it('should expand "expanded" related entity attributes on update', function () {
      return ds.Employee.query({ pageSize: 1, start: 10, select: 'employer' })
        .then(function (employees) {
          return employees.entities[0];
        })
        .then(function (employee) {
          employee.firstName = 'Arnaud';
          return employee.save()
            .then(function () {
              expect(employee.employer._deferred).to.equals(false);
              expect(employee.employer.name).to.be.equal('Blobarray Coolupe Orange');
            });
        });
    });

    it('should update only changed attributes', function () {
      return ds.Employee.query({ pageSize: 1, start: 12 })
        .then(function (employees) {
          return employees.entities[0];
        })
        .then(function (employee) {
          var oldStamp = employee._stamp;
          return employee.save()
            .then(function () {
              expect(employee._stamp).to.be.equal(oldStamp);
            });
        });
    });

  });

  describe('delete method', function () {
    it('sould be defined', function () {
      return ds.Product.query({ pageSize: 1 })
        .then(function (collection) {
          return collection.entities[0];
        })
        .then(function (product) {
          expect(product.delete).to.be.a('function');
        });
    });

    it('should return a promise', function (done) {
      ds.Product.query({ pageSize: 1 })
        .then(function (collection) {
          expect(collection.entities[0].delete()).to.be.a('promise');
          done();
        });
    });

    it('should delete the entity', function (done) {
      ds.Product.query({ pageSize: 10 })
        .then(function (collection) {
          var product = collection.entities[9];
          var productId = product._key;
          product.delete().then(function () {
            ds.Product.find(productId).catch(function (e) {
              expect(e).to.be.an('object');
              done();
            });
          });
        });
    });

    it('should throw an error when called on a non-saved entity', function () {
      var entity = ds.Product.create();
      expect(function () {
        entity.delete();
      }).to.throw(Error);
    });
  });

  describe('fetch method', function () {
    it('should be defined', function () {
      var entity = ds.Product.create();
      expect(entity.fetch).to.be.a('function');
    });

    it('should return a promise', function () {
      return ds.Employee.query({ pageSize: 1, filter: 'employer.ID > 0' })
        .then(function (collection) {
          var employee = collection.entities[0];
          expect(employee.employer.fetch()).to.be.a('promise');
        });
    });

    it('should fetch a deferred related entity', function () {
      return ds.Employee.query({ pageSize: 1, filter: 'employer.ID > 0' })
        .then(function (collection) {
          var employee = collection.entities[0];
          return employee.employer.fetch();
        })
        .then(function (company) {
          expect(company).to.be.an('object');
          expect(company._stamp).to.be.a('number');
          expect(company._key).to.be.a('string');
          expect(company.name).to.be.a('string');
        });
    });

    it('should update the fetched entity', function () {
      var employee;

      return ds.Employee.query({ pageSize: 1, filter: 'employer.ID > 0' })
        .then(function (collection) {
          employee = collection.entities[0];
          return employee.employer.fetch();
        })
        .then(function (company) {
          expect(company === employee.employer).to.equals(true);
        });
    });

    it('should refresh an already fetched entity', function () {
      var product, originalName;

      //Skipping some product as we removed some of it on previous tests
      return ds.Product.query({ pageSize: 1, start: 10 })
        .then(function (collection) {
          product = collection.entities[0];
          originalName = product.name;
          product.name = "Brand New Product Name";

          return product.fetch();
        })
        .then(function () {
          expect(product.name === originalName);
        });
    });

    it('should fail if called with invalid options', function () {
      return ds.Employee.query({ pageSize: 1, filter: 'employer.ID > 0' }).then(function (c) {
        var employee = c.entities[0];

        expect(function () {
          employee.employer.fetch({ pageSize: 4 });
        }).to.throw(Error);

        expect(function () {
          employee.employer.fetch({ filter: 'ID < 10' });
        }).to.throw(Error);

        expect(function () {
          employee.employer.fetch({ params: [2] });
        }).to.throw(Error);

        expect(function () {
          employee.employer.fetch({ orderBy: 'name' });
        }).to.throw(Error);

        expect(function () {
          employee.employer.fetch({ start: 0 });
        }).to.throw(Error);
      });
    });
  });

  describe('user defined methods', function () {

    it('should be defined', function () {
      return ds.Employee.query({ pageSize: 1 })
        .then(function (collection) {
          var employee = collection.entities[0];

          expect(employee.myEntityMethod).to.be.a('function');
        });
    });

    it('should return a promise', function () {
      return ds.Employee.query({ pageSize: 1 })
        .then(function (collection) {
          var employee = collection.entities[0];

          expect(employee.myEntityMethod()).to.be.a('promise');
        });
    });

    it('should return the right value', function () {
      var employee;

      return ds.Employee.query({ pageSize: 1 })
        .then(function (collection) {
          employee = collection.entities[0];

          return employee.myEntityMethod();
        })
        .then(function (result) {
          expect(result).to.be.equal('Hello from ' + employee.firstName + ' ' + employee.lastName);
        });
    });

    it('should fail if called on an unsaved entity', function () {
      var employee = ds.Employee.create();

      expect(function () {
        employee.myEntityMethod()
      }).to.throw(Error);
    });

    it('should transform result into an entity if needed', function () {
      return ds.Employee.query({ pageSize: 1 }).then(function (c) {
        return c.entities[0].returnSelf().then(function (e) {
          expect(wakClient.helper.isEntity(e)).to.equals(true);
        });
      });
    });

    it('should transform result into a collection if needed', function () {
      return ds.Company.query({ pageSize: 1 }).then(function (c) {
        return c.entities[0].returnStaff().then(function (e) {
          expect(wakClient.helper.isCollection(e)).to.equals(true);
        });
      });
    });
  });

  describe('recompute method', function () {

    it('should be defined', function () {
      var entity = ds.Product.create();
      expect(entity.recompute).to.be.a('function');
    });

    it('should return a promise', function () {
      var entity = ds.Product.create();
      expect(entity.recompute()).to.be.a('promise');
    });

    it('should edit the entity in place', function () {
      var entity = ds.Product.create();
      return entity.recompute().then(function (result) {
        expect(result).to.be.equal(entity);
      });
    });

    it('should fire init event for a newly created entity', function () {
      var entity = ds.Product.create();
      return entity.recompute().then(function () {
        expect(entity.myBoolean).to.equals(true);
      });
    });

    it('should fire clientrefresh event for a newly created entity', function () {
      var entity = ds.Product.create();
      return entity.recompute().then(function () {
        expect(entity.name).to.be.equal('Unnamed product');
      });
    });

    it('should fire clientrefresh event for an already saved entity', function () {
      return ds.Product.query({ pageSize: 3 })
        .then(function (collection) {
          var entity = collection.entities[0];

          entity.name = null;
          return entity.recompute().then(function () {
            expect(entity.name).to.be.equal('Unnamed product');
          });
        });
    });

    it('should not cause any trouble to saving after being called', function () {
      return ds.Product.query({ pageSize: 3 })
        .then(function (collection) {
          var entity = collection.entities[0];
          var oldStamp = entity._stamp;

          entity.name = null;
          return entity.recompute().then(function () {
            return entity.save().then(function () {
              expect(entity._stamp).to.be.above(oldStamp);
              expect(entity.name).to.be.equal('Unnamed product');
            });
          });
        });
    });
  });

  describe('boolean and numeric scalar fields', function () {
    //Values like 0 and false, that can easily be lost on if (value) {} conditions
    it('should be properly sent and retrieved with value comparable to null', function () {

      var entity = ds.Product.create({
        name: 'Exotic value',
        myBoolean: false,
        myNumber: 0
      });

      return entity.save()
        .then(function () {

          expect(entity.myNumber).to.be.a('number');
          expect(entity.myNumber).to.be.equal(0);
          expect(entity.myBoolean).to.be.a('boolean');
          expect(entity.myBoolean).to.equals(false);

          return ds.Product.find(entity.ID);
        });
    });
  });

  describe('date attribute field', function () {
    it('should be a Date object', function () {
      return ds.Employee.query({ pageSize: 1, filter: 'birthDate != null' })
        .then(function (collection) {
          return collection.entities[0];
        })
        .then(function (employee) {
          expect(employee.birthDate).to.be.a('Date');
        });
    });

    it('should be null if no date', function () {
      return ds.Employee.query({ pageSize: 1, filter: 'birthDate = null' })
        .then(function (collection) {
          return collection.entities[0];
        })
        .then(function (employee) {
          expect(employee.birthDate).to.equals(null);
        });
    });

    it('should update date attribute', function () {
      return ds.Employee.query({ pageSize: 10 })
        .then(function (collection) {
          return collection.entities[1];
        })
        .then(function (employee) {
          var date = new Date('1985-09-16T07:04:11.192Z');
          employee.birthDate = date;
          return employee.save()
            .then(function () {
              expect(employee.birthDate.toJSON()).to.be.equal(date.toJSON());
            });
        });
    });
  });

  describe('simple date attribute field', function () {
    it('should be a Date object', function () {
      return ds.Employee.query({ pageSize: 1, filter: 'hiringDate != null' })
        .then(function (collection) {
          return collection.entities[0];
        })
        .then(function (employee) {
          expect(employee.hiringDate).to.be.a('Date');
        });
    });

    it('should be null if no date', function () {
      return ds.Employee.query({ pageSize: 1, filter: 'hiringDate = null' })
        .then(function (collection) {
          return collection.entities[0];
        })
        .then(function (employee) {
          expect(employee.hiringDate).to.equals(null);
        });
    });
  });
});
