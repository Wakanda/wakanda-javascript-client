/* eslint-disable */

describe('Directory API', function () {
  var dir;
  before(function () {
    dir = wakClient.directory;
  });

  describe('login method', function () {
    it('should be defined', function () {
      expect(dir.login).to.be.a('function');
    });

    it('should return a promise', function () {
      var p = dir.login();
      expect(p).to.be.a('promise');

      //Silence the error reported by Karma because there is a unhandled promise rejection
      p.catch(function () {});
    });

    it('should resolve with correct credentials', function () {
      return dir.login('bar', 'bar', 3600 * 24 * 365).then(function (result) {
        expect(result).to.equals(true);
      });
    });

    it('should fail with bad credentials', function () {
      return dir.login('bad', 'credentials').catch(function (e) {
        expect(e instanceof Error).to.equals(true);
      });
    });

    it('should fail without any credentials', function () {
      return dir.login().catch(function (e) {
        expect(e instanceof Error).to.equals(true);
      });
    });

    it('should fail if given duration is not a number', function () {
      expect(function () {
        dir.login('foo', 'foo', '1 year');
      }).to.throw(Error);
    });

    it('should fail if given duration is a negative number', function () {
      expect(function () {
        dir.login('foo', 'foo', -3600);
      }).to.throw(Error);
    });
  });

  describe('logout method', function () {
    it('should be defined', function () {
      expect(dir.logout).to.be.a('function');
    });

    it('should return a promise', function () {
      expect(dir.logout()).to.be.a('promise');
    });

    it('should resolve', function () {
      return dir.logout().then(function (result) {
        expect(result).to.equals(true);
      });
    });
  });

  describe('getCurrentUser method', function () {
    it('should be defined', function () {
      expect(dir.getCurrentUser).to.be.a('function');
    });

    it('should return a promise', function () {
      var p = dir.getCurrentUser();

      expect(p).to.be.a('promise');

      //Silence Karma error report
      p.catch(function () {});
    });

    it('should return current user info if logged in', function () {
      return dir.login('bar', 'bar', 3600 * 24 * 365).then(function (isLoggedIn) {
        return dir.getCurrentUser().then(function (user) {
          expect(user.userName).to.be.equal('bar');
          expect(user.fullName).to.be.equal('bar');
          expect(user.ID).to.be.a('string');
          expect(user.ID.length).to.be.at.least(1);
        });
      });
    });

    it('should fail if user is not logged in', function () {
      return dir.logout().then(function () {
        return dir.getCurrentUser().catch(function (e) {
          expect(e instanceof Error).to.equals(true);
        });
      });
    });
  });

  describe('getCurrentUserBelongsTo method', function () {
    it('should be defined', function () {
      expect(dir.getCurrentUserBelongsTo).to.be.a('function');
    });

    it('should return a promise', function () {
      expect(dir.getCurrentUserBelongsTo('')).to.be.a('promise');
    });

    it('should fail if no parameter is given', function () {
      expect(function () {
        dir.getCurrentUserBelongsTo();
      }).to.throw(Error);
    });

    it('shoud fail if given parameter is not a string', function () {
      expect(function () {
        dir.getCurrentUserBelongsTo({ userName: 'bar' });
      }).to.throw(Error);
    });

    it('should resolve true if current user belongs to given group', function () {
      return dir.login('bar', 'bar', 3600 * 24 * 365).then(function (user) {
        return dir.getCurrentUserBelongsTo('Admin').then(function (result) {
          expect(result).to.equals(true);
        });
      });
    });

    it("should resolve false if current user doesn't belong to given group", function () {
      return dir.login('bar', 'bar', 3600 * 24 * 365).then(function (user) {
        return dir.getCurrentUserBelongsTo('QA').then(function (result) {
          expect(result).to.equals(false);
        });
      });
    });

    it('should resolve false if user is not logged in', function () {
      return dir.logout().then(function (user) {
        return dir.getCurrentUserBelongsTo('QA').then(function (result) {
          expect(result).to.equals(false);
        });
      });
    });
  });
});
