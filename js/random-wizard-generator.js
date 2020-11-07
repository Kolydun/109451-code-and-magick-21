'use strict';
(function () {
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
  var arrWizards = generateWizards(4);

  function generateWizards(number) {
    var completedArrWizards = [];
    for (var i = 0; i < number; i++) {
      completedArrWizards.push(generateRandomWizard());
    }
    return completedArrWizards;
  }

  function generateRandomWizard() {
    return {
      name: ARR_FIRST_NAMES[window.util.getRandomNum(0, 7)] + ' ' + ARR_SECOND_NAMES[window.util.getRandomNum(0, 7)],
      coat: window.wizardColors.ARR_COAT_COLORS[window.util.getRandomNum(0, 5)],
      eye: window.wizardColors.ARR_EYE_COLORS[window.util.getRandomNum(0, 4)]
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

  function showWizardList() {
    var wizardList = document.querySelector('.setup-similar');
    wizardList.classList.remove('hidden');
  }

  addWizardToList();
  showWizardList();
})();
