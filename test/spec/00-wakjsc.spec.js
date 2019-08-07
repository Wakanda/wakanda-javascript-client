describe('WakandaClient object', function() {
  describe('public APIs', function() {
    it('should have a getCatalog method', function() {
      expect(wakClient.getCatalog).to.be.a('function');
    });

    it('should have a directory object', function() {
      expect(wakClient.directory).to.be.an('object');
    });
  });

  describe('version() method', function() {
    it('should be defined', function() {
      expect(wakClient.version).to.be.a('function');
    });

    it('should return a string', function() {
      expect(wakClient.version()).to.be.a('string');
    });
  });

  describe('helper object', function() {
    var ds;
    before(function() {
      return wakClient.getCatalog().then(function(_ds) {
        ds = _ds;
      });
    });

    describe('isEntity method', function() {
      it('should be defined', function() {
        expect(wakClient.helper.isEntity).to.be.a('function');
      });

      it('should return true if the argument is an entity', function() {
        expect(wakClient.helper.isEntity(ds.Company.create())).to.be.true;
      });

      it('should return false if the argument is not an entity', function() {
        expect(wakClient.helper.isEntity()).to.be.false;
        expect(wakClient.helper.isEntity({})).to.be.false;
        expect(wakClient.helper.isEntity(1)).to.be.false;
        expect(wakClient.helper.isEntity('foo')).to.be.false;
        expect(wakClient.helper.isEntity([])).to.be.false;
        expect(wakClient.helper.isEntity({ foo: 'bar', _key: 'foo', ID: 2 })).to.be.false;
        expect(wakClient.helper.isEntity(null)).to.be.false;
        expect(wakClient.helper.isEntity(undefined)).to.be.false;
      });
    });

    describe('isCollection method', function() {
      it('should be defined', function() {
        expect(wakClient.helper.isCollection).to.be.a('function');
      });

      it('should return true if the argument is an entity', function() {
        return ds.Company.query({ pageSize: 5 }).then(function(c) {
          expect(wakClient.helper.isCollection(c)).to.be.true;
        });
      });

      it('should return false if the argument is not an entity', function() {
        expect(wakClient.helper.isCollection()).to.be.false;
        expect(wakClient.helper.isCollection({})).to.be.false;
        expect(wakClient.helper.isCollection(1)).to.be.false;
        expect(wakClient.helper.isCollection('foo')).to.be.false;
        expect(wakClient.helper.isCollection([])).to.be.false;
        expect(wakClient.helper.isCollection({ foo: 'bar', _key: 'foo', ID: 2 })).to.be.false;
        expect(wakClient.helper.isCollection(null)).to.be.false;
        expect(wakClient.helper.isCollection(undefined)).to.be.false;
      });
    });
  });
});
