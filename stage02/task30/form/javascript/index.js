window.addEventListener('DOMContentLoaded', function () {

  var form = document.querySelector('#form'),
      btn = document.querySelector('#submit');

  form.addEventListener('focus', eventOperation.inputFocus, true);
  form.addEventListener('blur', eventOperation.inputBlur, true);
  
  btn.addEventListener('click', eventOperation.submit, false);
  
});
