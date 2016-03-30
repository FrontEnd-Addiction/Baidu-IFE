[Demo](http://frontend-addiction.github.io/Baidu-IFE/stage02/task31/form/)

这个任务我觉得不仅仅考察了我们 JavaScript 的逻辑处理能力，还考察了我们 CSS 的能力

## How to Custom Your Radio or Checkbox Input

做过表单的人都知道，我们不可以对单选框，多选框设置样式，所以我们很多的 hack 来完成，网上也有很多教程。但要点只有下面两个

- `input` 标签设置样式，把单选或多选框在页面中消失

  ```css
  input[type="radio"],
  input[type="checkbox"] {
    display: none; /* or visibility: hidden; */
  }
  ```

- 在`input` 的兄弟元素设置我们的样式元素

  ```html
  <input type="radio">
  <span class="radio-style">
  ```

  之所以这样做的原因是可以更好的使用 CSS 来联动，当我们的 `input` 触发 `checked` 的时候，就可以对我们的样式元素进行设置样式

  ```css
  .radio-style {
    /* your custom style here */
  }

  input[type="radio"]:checked ~ .radio-style {
    /* your checked custom style here */
  }
  ```

## How to Custom Your Select Input

同样的，`<select>` 也是不可以自定义样式的，所以我们更多时候使用的就是 combombox，也就是一个表单再加一个下拉列表，一般也就是 `input` 和 `ul`，我们当然可以使用 JavaScript 来对他们进行联动，但是和上面同样的，我们也可以只使用 CSS 来完成

```html
<input type="text">
<ul>
  <li>Jason</li>
  <li>Drake</li>
  <li>Tony</li>
</ul>
```

```css
ul {
  display: none;
}

input:focus ~ ul {
  display: blocl;
}
```

这只是一个简简单单的例子，但通过上面对单选和多选框的讲解，你应该知道我想表达的意思了

All code reviews are welcome :)

