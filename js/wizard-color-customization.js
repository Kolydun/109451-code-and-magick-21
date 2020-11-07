'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');
  var fireballColor = userDialog.querySelector('input[name=fireball-color]');
  var wizardEyes = document.querySelector('#wizard-eyes');
  var wizardEyesColor = userDialog.querySelector('.wizard-eyes');
  var wizardEyesColorValue = userDialog.querySelector('input[name=eyes-color]');
  var wizardCoat = document.querySelector('#wizard-coat');
  var wizardCoatColor = userDialog.querySelector('.wizard-coat');
  var wizardCoatColorValue = userDialog.querySelector('input[name=coat-color]');

  fireball.addEventListener('click', function () {
    fireballColor.value = window.wizardColors.ARR_FIREBALL_COLORS[window.util.getRandomNum(0, 4)];
    fireball.style = 'background: ' + fireballColor.value;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyesColorValue.value = window.wizardColors.ARR_EYE_COLORS[window.util.getRandomNum(0, 4)];
    wizardEyesColor.style = 'fill: ' + wizardEyesColorValue.value;
  });

  wizardCoat.addEventListener('click', function () {
    wizardCoatColorValue.value = window.wizardColors.ARR_COAT_COLORS[window.util.getRandomNum(0, 5)];
    wizardCoatColor.style = 'fill: ' + wizardCoatColorValue.value;
  });
})();
