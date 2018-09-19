describe('Polyfills', function() {
  if (isBrowser()) {
    describe('window.CustomEvent', function() {
      it('should be defined', function() {
        expect(window.CustomEvent).to.be.a('function');
      });
    });
  }
});
