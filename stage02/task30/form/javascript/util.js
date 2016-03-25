var util = {

  phoneCheck: function (input, tips) {
    var reg = /^\d{11}$/;
    if (reg.test(input.value)) {
      this.correctInput(input, tips, '手机格式正解');
    } else {
      this.errorInput(input, tips, '手机格式错误');
    }
  },

  mailCheck: function (input, tips) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // I will figure it out
    if (reg.test(input.value)) {
      this.correctInput(input, tips, '邮箱可用');
    } else {
      this.errorInput(input, tips, '邮箱格式错误');
    }
  },

  repasswordCheck: function (input, tips) {
    var inputLength = input.value.length,
        passwordValue = document.querySelector('input[name="password"]').value;
    if (input.value !== passwordValue) {
      this.errorInput(input, tips, '密码输入不一致');
    } else if (inputLength < 8 || inputLength > 20) {
      this.errorInput(input, tips, '密码长度为8~20个英文字符');
    } else {
      this.correctInput(input, tips, '密码输入一致');
    }
    tips.style.display = 'block';
  },

  passwordCheck: function (input, tips) {
    var inputLength = input.value.length,
        repasswordInput = document.querySelector('input[name="repassword"]'),
        repasswordTips = repasswordInput.parentElement.nextElementSibling;
    if (inputLength >= 8 && inputLength <= 20) {
      this.correctInput(input, tips, '密码可用');
    } else {
      this.errorInput(input, tips, '密码不可用');
    }
    this.repasswordCheck(repasswordInput, repasswordTips); // 当成功后再重新更改密码
  },

  nameCheck: function (input, tips) {
    var nameLength = this.inputLength(input.value);
    if (nameLength === 0) {
      this.errorInput(input, tips, '名称不能为空');
    } else if (nameLength >= 4 && nameLength <=16) {
      this.correctInput(input, tips, '名称格式正确');
    } else {
      this.errorInput(input, tips, '长度为4～16个字符');
    }
  },

  inputLength: function (value) {
    var reg = /\w|[!-\/\:-@\[-`{-~]/gi,
        enLength = value.match(reg) ? value.match(reg).length : 0,
        zhLength = (value.length - enLength) * 2;
    return enLength + zhLength;
  },

  correctInput: function (input, tips, message) {
    input.className = 'correctInput';
    tips.className = 'correctTips tips';
    tips.innerText = message;
  },

  errorInput: function (input, tips, message) {
    input.className = 'errorInput';
    tips.className = 'errorTips tips';
    tips.innerText = message;
  }

};





