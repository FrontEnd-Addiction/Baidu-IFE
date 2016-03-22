window.addEventListener('DOMContentLoaded', function () {
	
	var button = document.querySelector('#match'),
			input = document.querySelector('input[name="name"]'),
			tips = document.querySelector('#tips');
			
	button.addEventListener('click', function () {
		var name = input.value,
				nameLength = inputLength(name);
		
		if (nameLength === 0) {
			
      input.className = 'errorInput';
      tips.className = 'errorTips';
			tips.innerText = '名称不能为空';
			
		} else if (nameLength >= 4 && nameLength <=16) {
			
      input.className = 'correctInput';
      tips.className = 'correctTips';
      tips.innerText = '名称格式正确';
			
		} else {
			
      input.className = '';
      tips.className = '';
			tips.innerText = '必填，长度为4～16个字符';
			
		}
	}, false);
	
}, false);

function inputLength (value) {
	var reg = /\w|[!-\/\:-@\[-`{-~]/gi,
	// [!-\/\:-@\[-`{-~] 表示32个特殊字符
	// 详情看 JavaScript: The Good Part
      enLength = value.match(reg) ? value.match(reg).length : 0,
			zhLength = (value.length - enLength) * 2;
	return enLength + zhLength;
}
