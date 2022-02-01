describe('Catalog API', function () {
  describe('getCatalog method', function () {
    it('should return a promise', function () {
      var getCall = wakClient.getCatalog();

      expect(getCall).to.be.a('promise');
      expect(getCall.then).to.be.a('function');
      expect(getCall.catch).to.be.a('function');
    });

    it('should provide an object to promise callback', function () {
      return wakClient.getCatalog().then(function (ds) {
        expect(ds).to.be.an('object');
      });
    });

    it('should retrieve all dataclasses without a given parameter', function () {
      return wakClient.getCatalog().then(function (ds) {
        expect(ds.Company).to.be.an('object');
        expect(ds.Employee).to.be.an('object');
        expect(ds.Product).to.be.an('object');
      });
    });

    it('should retrieve only given dataclasses', function () {
      return wakClient.getCatalog(['Employee', 'Company']).then(function (ds) {
        expect(ds.Company).to.be.an('object');
        expect(ds.Employee).to.be.an('object');
        expect(ds.Product).to.be.an('undefined');
      });
    });

    it('should fail trying to retrieve an unknown dataclass', function () {
      return wakClient.getCatalog(['Foo']).catch(function () {
        expect(true);
      });
    });

    it('should fail if given parameter is not an array', function () {
      expect(function () {
        wakClient.getCatalog('Foo');
      }).to.throw(Error);
    });

    it('should throw an exception if all needed dataClasses are not retrieved', function () {
      return wakClient.getCatalog(['Employee']).catch(function (e) {
        expect(e instanceof Error).to.be.equal(true);
      });
    });
  });
});
