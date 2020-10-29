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

showUserDialog();
addWizardToList();
showWizardList();

/* Задание 9 */

// var ARR_FIREBALL_COLORS = [
//   '#ee4830',
//   '#30a8ee',
//   '#5ce6c0',
//   '#e848d5',
//   '#e6e848',
// ];
// var KEY_CODE = {
//   ESC: 27,
//   ENTER: 13
// };
//
// var onDocumentKeydown = function (evt) {
//   if (evt.keyCode === KEY_CODE.ESC) {
//     closeUserDialog();
//   }
// };
//
// function closeUserDialog() {
//   document.querySelector('.setup').classList.add('hidden');
//   document.removeEventListener('keydown', onDocumentKeydown);
// }
//
// function openUserDialog() {
//   document.querySelector('.setup').classList.remove('hidden');
//   document.addEventListener('keydown', onDocumentKeydown);
// }
//
// function closeUserDialogWindow() {
//   var closeButton = document.querySelector('.setup-close');
//   document.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === KEY_CODE.ESC) {
//       closeUserDialog();
//     }
//   });
//   closeButton.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === KEY_CODE.ENTER) {
//       closeUserDialog();
//     }
//   });
//   closeButton.addEventListener('click', function () {
//     closeUserDialog();
//   });
// }
//
// function openUserDialogWindow() {
//   var openButton = document.querySelector('.setup-open');
//   openButton.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === KEY_CODE.ENTER) {
//       openUserDialog();
//     }
//   });
//   openButton.addEventListener('click', function () {
//     openUserDialog();
//   });
// }
//
// function setCloseButtonKeydown() {
//   var userNameField = document.querySelector('.setup-user-name');
//   userNameField.addEventListener('focus', function () {
//     document.removeEventListener('keydown', onDocumentKeydown);
//   });
//   userNameField.addEventListener('blur', function () {
//     document.addEventListener('keydown', onDocumentKeydown);
//   });
// }
//
// function changeFireballColor() {
//   var fireball = document.querySelector('.setup-fireball-wrap');
//   var fireballColor = document.querySelector('input[name=fireball-color]');
//   fireball.addEventListener('click', function () {
//     fireballColor.value = ARR_FIREBALL_COLORS[getRandomNum(0, 4)];
//     fireball.style = 'background: ' + fireballColor.value;
//   });
// }
//
// function changeWizardEyesColor() {
//   var wizardEyes = document.querySelector('#wizard-eyes');
//   var wizardEyesColor = document.querySelector('.wizard-eyes');
//   var wizardEyesColorValue = document.querySelector('input[name=eyes-color]');
//   wizardEyes.addEventListener('click', function () {
//     wizardEyesColorValue.value = ARR_EYE_COLORS[getRandomNum(0, 4)];
//     wizardEyesColor.style = 'fill: ' + wizardEyesColorValue.value;
//   });
// }
//
// function changeWizardCoatColor() {
//   var wizardCoat = document.querySelector('#wizard-coat');
//   var wizardCoatColor = document.querySelector('.wizard-coat');
//   var wizardCoatColorValue = document.querySelector('input[name=coat-color]');
//   wizardCoat.addEventListener('click', function () {
//     wizardCoatColorValue.value = ARR_COAT_COLORS[getRandomNum(0, 5)];
//     wizardCoatColor.style = 'fill: ' + wizardCoatColorValue.value;
//   });
// }


// changeFireballColor();
// changeWizardEyesColor();
// changeWizardCoatColor();
// closeUserDialogWindow();
// openUserDialogWindow();
// setCloseButtonKeydown();

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
  var closeButton = document.querySelector('.setup-close');
  var openButton = document.querySelector('.setup-open');
  var userNameField = document.querySelector('.setup-user-name');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = document.querySelector('input[name=fireball-color]');
  var wizardEyes = document.querySelector('#wizard-eyes');
  var wizardEyesColor = document.querySelector('.wizard-eyes');
  var wizardEyesColorValue = document.querySelector('input[name=eyes-color]');
  var wizardCoat = document.querySelector('#wizard-coat');
  var wizardCoatColor = document.querySelector('.wizard-coat');
  var wizardCoatColorValue = document.querySelector('input[name=coat-color]');

  var onDocumentKeydown = function (evt) {
    if (evt.keyCode === KEY_CODE.ESC) {
      closeUserDialog();
    }
  };

  function closeUserDialog() {
    document.querySelector('.setup').classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  function openUserDialog() {
    document.querySelector('.setup').classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
  }

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEY_CODE.ESC) {
      closeUserDialog();
    }
  });
  closeButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEY_CODE.ENTER) {
      closeUserDialog();
    }
  });
  closeButton.addEventListener('click', function () {
    closeUserDialog();
  });

  openButton.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEY_CODE.ENTER) {
      openUserDialog();
    }
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

userDialogSetup();
