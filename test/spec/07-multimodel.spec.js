describe('Multimodel : virtual model', function () {

  describe('getCatalog method', function () {

    it('should retrieve all dataclasses without a given parameter', function () {
      return wakClientPublication.getCatalog().then(function (ds) {
        expect(ds.Author).to.be.an('object');
        expect(ds.Book).to.be.an('object');
      });
    });

    it('should fail trying to retrieve an unknown dataclass', function () {
      return wakClientPublication.getCatalog(['Employee']).catch(function (e) {
        expect(e).to.be.an('object');
      });
    });


    it('should throw an exception if all needed dataClasses are not retrieved', function () {
      return wakClientPublication.getCatalog(['Book']).catch(function (e) {
        expect(e instanceof Error).to.equals(true);
      });
    });
  });

  describe('Dataclass API', function () {
    var ds;
    var existingId;
    before(function (done) {
      wakClientPublication.getCatalog().then(function (ds_) {
        ds = ds_;
        ds.Book.query({ pageSize: 1 }).then(function (c) {
          existingId = c.entities[0]._key;
          done();
        });
      });
    });


    describe('find method', function () {
      it('should retrieve an entity', function () {
        return ds.Book.find(existingId).then(function (book) {
          expect(book).to.be.an('object');
          expect(book._key).to.be.equal(existingId);
          expect(book.title).to.be.a('string');
          expect(book.author).to.be.an('object');
        });
      });

      it('should not expand related attributes by default', function () {
        return ds.Book.find(existingId).then(function (book) {
          expect(book.author._key).to.be.a('string');
          expect(book.author.firstName).to.be.an('undefined');
        });
      });

      it('should expand related attributes provided on select parameter', function () {
        return ds.Book.find(existingId, { select: 'author' }).then(function (book) {
          expect(book.author.ID).to.be.a('number');
          expect(book.author.firstName).to.be.a('string');
        });
      });
    });

    describe('query method', function () {
      it('should retrieve a collection of entity', function () {
        return ds.Book.query({ filter: 'ID > 0' }).then(function (collection) {
          expect(collection).to.be.an('object');
          expect(collection.entities).to.be.an('array');

          var book = collection.entities[0];
          expect(book).to.be.an('object');
          expect(book.ID).to.be.an('number');
          expect(book.title).to.be.a('string');
        });
      });

      it('should not expand related entities by default', function () {
        return ds.Book.query({ filter: 'ID > 0' }).then(function (collection) {
          expect(collection).to.be.an('object');
          expect(collection.entities).to.be.an('array');

          var book = collection.entities[0];
          expect(book).to.be.an('object');
          expect(book.author).to.be.an('object');
          expect(book.author.firstName).to.be.an('undefined');
        });
      });

      it('should retrieve at most pageSize entity', function () {
        return ds.Book.query({ pageSize: 5 }).then(function (collection) {
          expect(collection).to.be.an('object');
          expect(collection.entities).to.be.an('array');
          expect(collection.entities.length).to.be.at.most(5);
        });
      });
    });
  });

  describe('Entity API', function () {
    var ds;

    before(function (done) {
      wakClientPublication.getCatalog().then(function (ds_) {
        ds = ds_;
        done();
      });
    });

    describe('save method', function () {
      it('should store the given attributes', function () {
        var entity = ds.Book.create({
          title: 'JavaScript The Good Parts',
          ID: 20
        });

        return entity.save()
          .then(function () {
            expect(entity.ID).to.be.a('number');
            expect(entity.title).to.be.equal('JavaScript The Good Parts');
          });
      });

      // it('should store related entity', function () {

      //   return ds.Author.query({ pageSize: 1, filter: 'lastName = :1', params: ['Camus'] })
      //     .then(function (authors) {
      //       return authors.entities[0];
      //     })
      //     .then(function (author) {
      //       var entity = ds.Book.create({
      //         title: 'Le premier homme',
      //         author: author,
      //         ID: 40
      //       });

      //       return entity.save().then(function () {
      //         expect(entity.author).to.be.an('object');
      //         expect(entity.author._key).to.be.equal(author._key);
      //       });
      //     });
      // });
    });
  });



  describe('Collection API', function () {

    var ds;
    before(function (done) {
      wakClientPublication.getCatalog().then(function (ds_) {
        ds = ds_;
        done();
      });
    });


    describe('fetch method', function () {
      var collection;
      beforeEach(function () {
        return ds.Author.query({ pageSize: 5 }).then(function (c) {
          collection = c;
        });
      });

      it('should fetch a deferred collection', function () {
        var c = collection.entities[0];

        expect(c.books._deferred).to.be.true;
        return c.books.fetch().then(function () {
          expect(c.books._deferred).to.be.false;
        });
      });

      // it('should refresh an already fetched collection', function () {
      //   var oldCollectionSize = collection.entities.length;
      //   collection.entities = [];

      //   return collection.fetch().then(function () {
      //     expect(collection.entities.length).to.be.equal(oldCollectionSize);
      //   });
      // });

      it('should retrieve at most pageSize entities', function () {
        var books = collection.entities[0].books;
        return books.fetch({ pageSize: 2 }).then(function () {
          expect(books.entities.length).to.be.at.most(2);
          expect(books._pageSize).to.be.equal(2);
          expect(books._sent).to.be.at.most(2);
        });
      });
    });

  });

});