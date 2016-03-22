// IE9+
window.addEventListener('DOMContentLoaded', function () {
	
	var button = document.querySelector('#match'),
			input = document.querySelector('input[name="name"]'),
			tips = document.querySelector('.tips');
			
	button.addEventListener('click', function () {
		var name = input.value,
				nameLength = inputLength(name);
		
		if (nameLength === 0) {
			
			addClass(input, 'errorInput');
			removeClass(input, 'correctInput');
			addClass(tips, 'errorTips');
			removeClass(tips, 'correctTips');
			tips.innerText = '名称不能为空';
			
		} else if (nameLength >= 4 && nameLength <=16) {
			
			addClass(input, 'correctInput');
			addClass(tips, 'correctTips');
			tips.innerText = '名称格式正确';
			
		} else {
			
			removeClass(input, 'errorInput');
			removeClass(input, 'correctInput');
			removeClass(tips, 'errorTips');
			removeClass(tips, 'correctTips');
			tips.innerText = '必填，长度为4～16个字符';
			
		}
	}, false);
	
}, false);

function addClass (elm, className) {
	if (elm.classList) {
		elm.classList.add(className);
	} else {
		elm.className += ' ' + className;
	}
}

function removeClass (elm, className) {
	if (elm.classList) {
		elm.classList.remove(className);
	} else {
		var reg = new RegExp('(^| )' + className + '( |$)', 'gi');
		elm.className.replace(reg, ' ');
	}
}

function inputLength (value) {
	var reg = /\w|[!-\/\:-@\[-`{-~]/gi,
	// [!-\/\:-@\[-`{-~] 表示32个特殊字符
	// 详情看 JavaScript: The Good Part
      enLength = value.match(reg) ? value.match(reg).length : 0,
			zhLength = (value.length - enLength) * 2;
	return enLength + zhLength;
}