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

function generateWizards(number) {
  var CompletedArrWizards = [];
  for (var i = 0; i < number; i++) {
    CompletedArrWizards.push(generateRandomWizard());
  }
  return CompletedArrWizards;
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

var ARR_FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];
var closeUserDialog = function () {
  document.querySelector('.setup').classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};
var openUserDialog = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};
var onDocumentKeydown = function (evt) {
  if (evt.keyCode === 27) {
    closeUserDialog();
  }
};
var onCloseButtonKeydown = function (evt) {
  if (evt.keyCode === 13) {
    closeUserDialog();
  }
};
var onOpenButtonKeydown = function (evt) {
  if (evt.keyCode === 13) {
    openUserDialog();
  }
};

function closeUserDialogWindow() {
  var closeButton = document.querySelector('.setup-close');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('keydown', onCloseButtonKeydown);
  closeButton.addEventListener('click', closeUserDialog);
}

function openUserDialogWindow() {
  var openButton = document.querySelector('.setup-open');
  openButton.addEventListener('keydown', onOpenButtonKeydown);
  openButton.addEventListener('click', openUserDialog);
}

function setCloseButtonKeydown() {
  var userNameField = document.querySelector('.setup-user-name');
  userNameField.addEventListener('focus', function () {
    document.removeEventListener('keydown', onDocumentKeydown);
  });
  userNameField.addEventListener('blur', function () {
    document.addEventListener('keydown', onDocumentKeydown);
  });
}

function changeFireballColor() {
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = document.querySelector('#fireball-color-id');
  fireball.addEventListener('click', function () {
    fireballColor.value = ARR_FIREBALL_COLORS[getRandomNum(0, 4)];
    fireball.style = 'background: ' + fireballColor.value;
  });
}

function changeWizardEyesColor() {
  var wizardEyes = document.querySelector('#wizard-eyes');
  var wizardEyesColor = document.querySelector('.wizard-eyes');
  var wizardEyesColorValue = document.querySelector('#wizard-eyes-color');
  wizardEyes.addEventListener('click', function () {
    wizardEyesColorValue.value = ARR_EYE_COLORS[getRandomNum(0, 4)];
    wizardEyesColor.style = 'fill: ' + wizardEyesColorValue.value;
  });
}

function changeWizardCoatColor() {
  var wizardCoat = document.querySelector('#wizard-coat');
  var wizardCoatColor = document.querySelector('.wizard-coat');
  var wizardCoatColorValue = document.querySelector('#wizard-coat-color');
  wizardCoat.addEventListener('click', function () {
    wizardCoatColorValue.value = ARR_COAT_COLORS[getRandomNum(0, 5)];
    wizardCoatColor.style = 'fill: ' + wizardCoatColorValue.value;
  });
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

showUserDialog();
addWizardToList();
showWizardList();
changeFireballColor();
changeWizardEyesColor();
changeWizardCoatColor();
closeUserDialogWindow();
openUserDialogWindow();
setCloseButtonKeydown();
