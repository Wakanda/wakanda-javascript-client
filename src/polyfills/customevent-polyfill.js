// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
(() => {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }

  function CustomEvent(event, p) {
    let params = p;
    params = params || { bubbles: false, cancelable: false };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
  return null;
})();
