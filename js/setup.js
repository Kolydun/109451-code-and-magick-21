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

main();

function main() {
  var arrWizards = generateWizards(4);
  var fragment = createWizardFragment(arrWizards);
  var similarListElement = document.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
  showUserDialog();
  showWizardList();
}

function generateWizards(number) {
  let arrWizards = [];
  for (var i = 0; i < number; i++) {
    arrWizards [i] = generateRandomWizard();
  }
  return arrWizards;
}

function generateRandomWizard() {
  return {
    name: ARR_FIRST_NAMES[getRandomNum(0, 7)] + ' ' + ARR_SECOND_NAMES[getRandomNum(0, 7)],
    coat: ARR_COAT_COLORS[getRandomNum(0, 5)],
    eye: ARR_EYE_COLORS[getRandomNum(0, 4)]
  };
}

function createWizardFragment(arrWizards) {
  var wizardFragment = document.createDocumentFragment();
  for (var i = 0; i < arrWizards.length; i++) {
    addWizardToFragment(arrWizards[i], wizardFragment);
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


function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
