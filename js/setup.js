'use strict';

var USER_DIALOG = document.querySelector('.setup');
var SIMILAR_LIST_ELEMENT = document.querySelector('.setup-similar-list');
var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var WIZARD_FRAGMENT = document.createDocumentFragment();
var WIZARD_LIST = document.querySelector('.setup-similar');
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
var ARR_WIZZARDS = [];
let getRandomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var WIZARD_NAMES_NUM = 4;

USER_DIALOG.classList.remove('hidden');


for (var i = 0; i < WIZARD_NAMES_NUM; i++) {
  ARR_WIZZARDS [i] = {
    name: ARR_FIRST_NAMES[getRandomNum(0, 7)] + ' ' + ARR_SECOND_NAMES[getRandomNum(0, 7)],
    coat: ARR_COAT_COLORS[getRandomNum(0, 5)],
    eye: ARR_EYE_COLORS[getRandomNum(0, 4)]
  };
}

for (var j = 0; j < ARR_WIZZARDS.length; j++) {
  var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = ARR_WIZZARDS[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = ARR_WIZZARDS[j].coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = ARR_WIZZARDS[j].eye;

  WIZARD_FRAGMENT.appendChild(wizardElement);
  SIMILAR_LIST_ELEMENT.appendChild(WIZARD_FRAGMENT);
}

WIZARD_LIST.classList.remove('hidden');
