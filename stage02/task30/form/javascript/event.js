var eventOperation = {

  submit: function (e) {
    var inputs = document.querySelectorAll('input'),
        inputArr = [].slice.call(inputs, 0),
        isAllPass = inputArr.every(function (input) {
      return input.className === 'correctInput';
    });
    isAllPass ? alert('提交成功') : alert('提交失败')
  },

  inputFocus: function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.tagName.toLowerCase() === 'input' ) {
      eventOperation.focusCheck(target);
    }
  },

  inputBlur: function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.tagName.toLowerCase() === 'input' ) {
      eventOperation.blurCheck(target);
    }
  },

  focusCheck: function (input) {
    input.className = 'inputFocus';
    var tips = input.parentElement.nextElementSibling;
    tips.style.display = 'block';
  },

  blurCheck: function (input) {
    var tips = input.parentElement.nextElementSibling;
    switch (input.name) {
      
      case 'name':
        util.nameCheck(input, tips);
        break;
      case 'password':
        util.passwordCheck(input, tips);
        break;
      case 'repassword':
        util.repasswordCheck(input, tips);
        break;
      case 'mail':
        util.mailCheck(input, tips);
        break;
      case 'phone':
        util.phoneCheck(input, tips);
        break;
      default:
        break;
    }
  }
  
};
