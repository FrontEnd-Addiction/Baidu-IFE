[Demo](http://codepen.io/Lmovingon/pen/zqZbXJ?editors=0110)

## *box-shadow*

`box-shadow` 是一个 CSS3 的样式，要 IE9+ 才能支持。具体的用法可以看 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

使用 `box-shadow` 可以让表单看起来更加有立体感，而且也可以做到更加吸引人的提示效果，里面有一些属性如果没有太强的感觉的话，可以到 [CSS Box Shadow Generator](http://www.css3developer.com/css3generator/inset-box-shadow-css.html) 这里滑动一下，找找感觉

## Regular Expressions

我在本题是做法通过 `RegExp.match` 先去匹配英文字符，数字字符和 32 个特殊字符，然后算出匹配之后的长度，再用用户输入的长度减去匹配之后的长度。那么就认为剩下的，都是中文字符，然后再把它们乘 2，最后两个的长度之和

```javascript
function inputLength (value) {
  var reg = /\w|[!-\/\:-@\[-`{-~]/gi,
      enLength = value.match(reg) ? value.match(reg).length : 0,
      zhLength = (value.length - enLength) * 2;
  return enLength + zhLength;
}
```

正则的 `\w` 表示 `[0-9A-Z_a-z]`，而 `[!-\/\:-@\[-`{-~]` 则表示 32 个 ASCII 的特殊字符。大家可以使用 [Online RegExp Tester](https://regex101.com/#javascript)，里面会对你的正则进行分析，你也可以在里面进行测试，它会帮你高亮匹配的字符，非常方便

