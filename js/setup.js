'use strict';

var ARR_FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var ARR_SECOND_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var ARR_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var ARR_EYE_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var arrWizards = generateWizards(4);

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateWizards(number) {
  var completedArrWizards = [];
  for (var i = 0; i < number; i++) {
    completedArrWizards.push(generateRandomWizard());
  }
  return completedArrWizards;
}

function generateRandomWizard() {
  return {
    name: ARR_FIRST_NAMES[getRandomNum(0, 7)] + ' ' + ARR_SECOND_NAMES[getRandomNum(0, 7)],
    coat: ARR_COAT_COLORS[getRandomNum(0, 5)],
    eye: ARR_EYE_COLORS[getRandomNum(0, 4)]
  };
}

function addWizardToList() {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = createWizardFragment(arrWizards);
  similarListElement.appendChild(fragment);
}

function createWizardFragment(array) {
  var wizardFragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    addWizardToFragment(array[i], wizardFragment);
  }
  return wizardFragment;
}

function addWizardToFragment(wizard, wizardFragment) {
  var wizardElement = fillWizardTemplate(wizard);
  wizardFragment.appendChild(wizardElement);
}

function fillWizardTemplate(wizard) {
  var wizardConfig = getWizardTemplate();
  var wizardElement = wizardConfig.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eye;
  return wizardElement;
}

function getWizardTemplate() {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardConfig = wizardTemplate.querySelector('.setup-similar-item');
  return wizardConfig;
}

function showUserDialog() {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
}


function showWizardList() {
  var wizardList = document.querySelector('.setup-similar');
  wizardList.classList.remove('hidden');
}

/* Задание 9 */
showUserDialog();
addWizardToList();
showWizardList();
userDialogSetup();

function userDialogSetup() {
  var ARR_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];
  var KEY_CODE = {
    ESC: 27,
    ENTER: 13
  };
  var userDialog = document.querySelector('.setup');
  var closeButton = userDialog.querySelector('.setup-close');
  var openButton = document.querySelector('.setup-open');
  var userNameField = userDialog.querySelector('.setup-user-name');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');
  var fireballColor = userDialog.querySelector('input[name=fireball-color]');
  var wizardEyes = document.querySelector('#wizard-eyes');
  var wizardEyesColor = userDialog.querySelector('.wizard-eyes');
  var wizardEyesColorValue = userDialog.querySelector('input[name=eyes-color]');
  var wizardCoat = document.querySelector('#wizard-coat');
  var wizardCoatColor = userDialog.querySelector('.wizard-coat');
  var wizardCoatColorValue = userDialog.querySelector('input[name=coat-color]');
  var keyboard = {
    isEscEvent: function (evt, callback) {
      if (evt.keyCode === KEY_CODE.ESC) {
        callback();
      }
    },
    isEnterEvent: function (evt, callback) {
      if (evt.keyCode === KEY_CODE.ENTER) {
        callback();
      }
    }
  };

  function onDocumentKeydown(evt) {
    keyboard.isEscEvent(evt, closeUserDialog);
  }
  function closeUserDialog() {
    document.querySelector('.setup').classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  function openUserDialog() {
    document.querySelector('.setup').classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
  }

  closeButton.addEventListener('keydown', function (evt) {
    keyboard.isEnterEvent(evt, closeUserDialog);
  });
  closeButton.addEventListener('click', function () {
    closeUserDialog();
  });

  openButton.addEventListener('keydown', function (evt) {
    keyboard.isEnterEvent(evt, openUserDialog);
  });
  openButton.addEventListener('click', function () {
    openUserDialog();
  });

  userNameField.addEventListener('focus', function () {
    document.removeEventListener('keydown', onDocumentKeydown);
  });

  userNameField.addEventListener('blur', function () {
    document.addEventListener('keydown', onDocumentKeydown);
  });

  fireball.addEventListener('click', function () {
    fireballColor.value = ARR_FIREBALL_COLORS[getRandomNum(0, 4)];
    fireball.style = 'background: ' + fireballColor.value;
  });


  wizardEyes.addEventListener('click', function () {
    wizardEyesColorValue.value = ARR_EYE_COLORS[getRandomNum(0, 4)];
    wizardEyesColor.style = 'fill: ' + wizardEyesColorValue.value;
  });


  wizardCoat.addEventListener('click', function () {
    wizardCoatColorValue.value = ARR_COAT_COLORS[getRandomNum(0, 5)];
    wizardCoatColor.style = 'fill: ' + wizardCoatColorValue.value;
  });
}
