'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var closeButton = userDialog.querySelector('.setup-close');
  var openButton = document.querySelector('.setup-open');
  var userNameField = userDialog.querySelector('.setup-user-name');

  function onDocumentKeydown(evt) {
    window.util.isEscEvent(evt, closeUserDialog);
  }

  function closeUserDialog() {
    document.querySelector('.setup').classList.add('hidden');
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  function openUserDialog() {
    document.querySelector('.setup').classList.remove('hidden');
    document.addEventListener('keydown', onDocumentKeydown);
    userDialog.style.top = '80px';
    userDialog.style.left = '50%';
  }

  closeButton.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeUserDialog);
  });
  closeButton.addEventListener('click', function () {
    closeUserDialog();
  });

  openButton.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openUserDialog);
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

})();
