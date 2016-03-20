[Demo](http://codepen.io/Lmovingon/pen/wGJJzq)

## Containing Block

- 根节点的 containing block 叫 initial containing block，它的尺寸与 viewport 相同
- 如果一个元素的 `position` 属性是 `static` 或 `relative`，那么它的 containing block 就是 `dispaly` 属性拥有下列值的最靠近它的祖先元素
    - `block`
    - `inline-block`
    - `list-item`
    - `table`
    - `table-cell`
- 如果一个元素的 `position` 属性是 `absolute`，那它的 containing block 就是 `position` 属性拥有下列值的最靠近它的祖先元素
    - `fixed`
    - `relative`
    - `absolute`
- 如果一个元素的 `position` 属性是 `fixed`，那么它的 containing block 就是 viewport

## CSS Properties Other

```css
.sclector {
  /* Positioning:
  position
  z-index
  top right bottom left
  */
  
  /* Dispaly & Box Model:
  display
  overflow
  box-sizing
  width height
  padding border margin
  */
  
  /* Color:
  background
  color
  */
  
  /* Text:
  font
  line-height
  text-align
  text-decoration
  */
  
  /* Other
  cursor
  */
}
```

## Besides

Demo 里使用的方法是不需要知道块的长宽高，同样的，还有另一种方式可以实现，但这需要 CSS3 的支持

```css
div {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
```

当然也可以使用 flex 布局，但是需要在居中块的外层再加一层，并设置为屏幕高度，当然你可以把这一层用 `body` 代替

```html
<div class="container">
  <div class="center"></div>
</div>
```

```css
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
```