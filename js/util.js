'use strict';

(function () {
  var KEY_CODE = {
    ESC: 27,
    ENTER: 13
  };
  window.util = {
    isEscEvent: function (evt, callback) {
      if (evt.keyCode === KEY_CODE.ESC) {
        callback();
      }
    },
    isEnterEvent: function (evt, callback) {
      if (evt.keyCode === KEY_CODE.ENTER) {
        callback();
      }
    },
    getRandomNum: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  };
})();
