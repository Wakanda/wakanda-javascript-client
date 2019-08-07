describe('Collection API', function() {
  var ds;

  before(function(done) {
    wakClient.getCatalog().then(function(ds_) {
      ds = ds_;
      done();
    });
  });

  describe('metadata', function() {
    var collection;

    before(function() {
      return ds.Company.query({ pageSize: 5 }).then(function(c) {
        collection = c;
      });
    });

    it('should have a _count property', function() {
      expect(collection._count).to.be.a('number');
    });

    it('should have a _deferred property', function() {
      expect(collection._deferred).to.be.a('boolean');
    });

    it('should have a _first property', function() {
      expect(collection._first).to.be.a('number');
    });

    it('should have a _pageSize property', function() {
      expect(collection._pageSize).to.be.a('number');
    });

    it('should have a _sent property', function() {
      expect(collection._sent).to.be.a('number');
    });

    it('should have an entities array', function() {
      expect(collection.entities).to.be.an('array');
    });
  });

  describe('fetch method', function() {
    var collection;

    beforeEach(function() {
      return ds.Company.query({ pageSize: 5 }).then(function(c) {
        collection = c;
      });
    });

    it('should be defined', function() {
      expect(collection.fetch).to.be.a('function');
    });

    it('should return a promise', function() {
      expect(collection.fetch()).to.be.a('promise');
    });

    it('should fetch a deferred collection', function() {
      var c = collection.entities[0];

      expect(c.staff._deferred).to.be.true;
      return c.staff.fetch().then(function() {
        expect(c.staff._deferred).to.be.false;
      });
    });

    it('should refresh an already fetched collection', function() {
      var oldCollectionSize = collection.entities.length;
      collection.entities = [];

      return collection.fetch().then(function() {
        expect(collection.entities.length).to.be.equal(oldCollectionSize);
      });
    });

    it('should change page size of an already fetched collection if a new one if given', function() {
      var oldPageSize = collection._pageSize;

      return collection.fetch({ pageSize: oldPageSize * 3 }).then(function() {
        expect(collection._pageSize).to.be.equal(oldPageSize * 3);
      });
    });

    it('should keep previously pageSize option of an already fetched collection if called without any', function() {
      var oldPageSize = collection._pageSize;

      return collection.fetch().then(function() {
        expect(collection._pageSize).to.be.equal(oldPageSize);
      });
    });

    it('should throw an error if called with invalid options', function() {
      expect(function() {
        collection.fetch({ method: 'foo' });
      }).to.throw(Error);
    });

    it('should throw an error if called with select and deferred', function() {
      expect(function() {
        collection.entities[0].staff.fetch({ select: 'employer' });
      }).to.throw(Error);
    });

    it('should retrieve at most pageSize entities', function() {
      var staff = collection.entities[0].staff;

      return staff.fetch({ pageSize: 10 }).then(function() {
        expect(staff.entities.length).to.be.at.most(10);
        expect(staff._pageSize).to.be.equal(10);
        expect(staff._sent).to.be.at.most(10);
      });
    });

    it('should skip start entities', function() {
      var staff = collection.entities[0].staff;

      return staff.fetch({ start: 10 }).then(function() {
        expect(staff._first).to.be.equal(10);
      });
    });
  });

  describe('nextPage method', function() {
    var collection;

    beforeEach(function() {
      return ds.Company.query({ pageSize: 5 }).then(function(c) {
        collection = c;
      });
    });

    it('should be defined', function() {
      expect(collection.nextPage).to.be.a('function');
    });

    it('should return a promise', function() {
      expect(collection.nextPage()).to.be.a('promise');
    });

    it('should fetch different data', function() {
      var oldFirstEntity = collection.entities[0];

      return collection.nextPage().then(function() {
        expect(oldFirstEntity.ID).to.not.be.equal(collection.entities[0].ID);
      });
    });

    it('should fetch a page of the same size', function() {
      return collection.nextPage().then(function() {
        expect(collection._pageSize).to.be.equal(5);
      });
    });

    it('should fetch the next entities', function() {
      var oldFirst = collection._first;

      return collection.nextPage().then(function() {
        expect(collection._first).to.be.equal(oldFirst + collection._pageSize);
      });
    });

    it('should throw an error if called on a deferred collection', function() {
      var staff = collection.entities[0].staff;

      expect(function() {
        staff.nextPage();
      }).to.throw(Error);
    });
  });

  describe('prevPage method', function() {
    var collection;

    beforeEach(function() {
      return ds.Company.query({ pageSize: 5, start: 10 }).then(function(c) {
        collection = c;
      });
    });

    it('should be defined', function() {
      expect(collection.prevPage).to.be.a('function');
    });

    it('should return a promise', function() {
      expect(collection.prevPage()).to.be.a('promise');
    });

    it('should fetch different data', function() {
      var oldFirstEntity = collection.entities[0];

      return collection.prevPage().then(function() {
        expect(collection.entities[0].ID).to.not.be.equal(oldFirstEntity.ID);
      });
    });

    it('should fetch a page of the same size', function() {
      return collection.prevPage().then(function() {
        expect(collection._pageSize).to.be.equal(5);
      });
    });

    it('should fetch previous entities', function() {
      var oldFirst = collection._first;

      return collection.prevPage().then(function() {
        expect(collection._first).to.be.equal(oldFirst - collection._pageSize);
      });
    });

    it('should throw an error if called on a deferred collection', function() {
      var staff = collection.entities[0].staff;

      expect(function() {
        staff.prevPage();
      }).to.throw(Error);
    });
  });

  describe('more method', function() {
    var collection;

    beforeEach(function() {
      return ds.Company.query({ pageSize: 5 }).then(function(c) {
        collection = c;
      });
    });

    it('should be defined', function() {
      expect(collection.more).to.be.a('function');
    });

    it('should return a promise', function() {
      expect(collection.more()).to.be.a('promise');
    });

    it('should append more data to the actual collection', function() {
      var oldSize = collection.entities.length;

      return collection.more().then(function() {
        expect(collection.entities.length).to.be.at.most(oldSize + 5);
      });
    });

    it('should update metadata', function() {
      var oldSent = collection._sent;

      return collection.more().then(function() {
        expect(collection._sent).to.be.at.most(oldSent + 5);
      });
    });

    it('should throw an error if called on a deferred collection', function() {
      var staff = collection.entities[0].staff;

      expect(function() {
        staff.more();
      }).to.throw(Error);
    });
  });

  describe('User defined methods', function() {
    describe('on root collections', function() {
      var collection;

      before(function() {
        return ds.Company.query({ pageSize: 5 }).then(function(companies) {
          collection = companies;
        });
      });

      it('should be defined', function() {
        expect(collection.myCollectionMethod).to.be.a('function');
      });

      it('should return a promise', function() {
        expect(collection.myCollectionMethod()).to.be.a('promise');
      });

      it('should return the right value', function() {
        return collection.myCollectionMethod().then(function(result) {
          expect(result).to.be.equal('This is a call to my collection method (Company)');
        });
      });

      it('should transform result into an entity if needed', function() {
        return collection.firstOfCollection().then(function(e) {
          expect(wakClient.helper.isEntity(e)).to.be.true;
        });
      });

      it('should transform result into a collection if needed', function() {
        return collection.returnSelf().then(function(e) {
          expect(wakClient.helper.isCollection(e)).to.be.true;
        });
      });
    });

    describe('on expanded collections', function() {
      var collection;

      before(function() {
        return ds.Company.query({ pageSize: 1, select: 'staff' }).then(function(companies) {
          collection = companies.entities[0].staff;
        });
      });

      it('should be defined', function() {
        expect(collection.myCollectionMethod).to.be.a('function');
      });

      it('should return a promise', function() {
        expect(collection.myCollectionMethod()).to.be.a('promise');
      });

      it('should return the right value', function() {
        return collection.myCollectionMethod().then(function(result) {
          expect(result).to.be.equal(
            'Hello from collection employee ! There is 9 items on the collection.'
          );
        });
      });

      it('should transform result into an entity if needed', function() {
        return collection.firstOfCollection().then(function(e) {
          expect(wakClient.helper.isEntity(e)).to.equals(true);
        });
      });

      it('should transform result into a collection if needed', function() {
        return collection.someCompanies().then(function(e) {
          expect(wakClient.helper.isCollection(e)).to.equals(true);
        });
      });
    });

    describe('on lazily fetched collections', function() {
      var collection;

      before(function() {
        return ds.Company.query({ pageSize: 1 }).then(function(companies) {
          return companies.entities[0].staff.fetch().then(function() {
            collection = companies.entities[0].staff;
          });
        });
      });

      it('should be defined', function() {
        expect(collection.myCollectionMethod).to.be.a('function');
      });

      it('should return a promise', function() {
        expect(collection.myCollectionMethod()).to.be.a('promise');
      });

      it('should return the right value', function() {
        return collection.myCollectionMethod().then(function(result) {
          expect(result).to.be.equal(
            'Hello from collection employee ! There is 9 items on the collection.'
          );
        });
      });

      it('should transform result into an entity if needed', function() {
        return collection.firstOfCollection().then(function(e) {
          expect(wakClient.helper.isEntity(e)).to.be.true;
        });
      });

      it('should transform result into a collection if needed', function() {
        return collection.someCompanies().then(function(e) {
          expect(wakClient.helper.isCollection(e)).to.be.true;
        });
      });
    });
  });
});
