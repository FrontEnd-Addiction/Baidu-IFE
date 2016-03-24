[Demo](http://frontend-addiction.github.io/Baidu-IFE/stage02/task30/form/)

## Some Note

对于一些 list 的操作，我们一般都是使用 [Event Delegation](https://github.com/L-movingon/prepare-for-interview/blob/master/JavaScript/event-bubble-and-event-delegation.md#event-delegation)。把事件绑定在父元素上，统一处理。

一开始我绑定了 `click` 事件，在鼠标下操作可以，但是当我们使用 <kbd>Tab</kbd> 来在表单上跳转的时候，并不会表现得像我们预期的一样，因为根本没有触发 `click` 事件。

但是不管是使用鼠标还是 <kbd>Tab</kbd>，都会触发 `focus` 事件，所以问题就在如何为 `<ul>` 绑定 `focus` 和 `blue` 事件，但是因为这两个事件并不支持事件冒泡，但可以通过事件捕获来绑定它们！

```javascript
form.addEventListener('focus', delegateFocus, true);
form.addEventListener('blur', delegateBlur, true);
```

但如果需要兼容 IE9 之前的版本，就不能使用 `addEventListener` 方法来绑定事件了，不仅仅因为方法不支持，还因为不支持事件捕获。但是 IE 却支持两个会冒泡的事件 `focusin` 和 `focusout`，就像这样

```javascript
form.onfocusin = delegateFocus;
form.onfocusout = delegateBlur;
```

## Reference

[Delegating the focus and blur events](http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html)

