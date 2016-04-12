# modal
a modal component implement with vanilla JavaScript

## Demo
:rocket: [check it out](http://jsbin.com/wezafu/edit?html,css,js,output
) ~

## Usage
Just new a `Model` class, and you can pass an option object.

```javascript
const modal = new Modal({
  type: 'warning',
  title: 'Warning',
  msg: 'You failed the city',
  button: 'Nice!'
  close: true,
  overlay: true
})
```
And dont' forget to inject the CSS file, which you can find it in the `css/` diretory.

```html
<head>
  <link href="app.css" rel="stylesheet"> <!-- we add this line -->
</head>
```

## Options

#### type
a theme for the modal, different theme have different color.

- type: `string`
- value: [success, info, warning, error]
- default: `sccuess`

#### title
modal's title on the top.

- type: `string`
- value: any valid string
- default: none

#### msg
the main content of the modal

- type: `string`
- value: nay valid string
- default: none

#### button
button text

- type: `string`
- value: any valid string
- default: none

#### close
close button

- type: `boolean`
- value: `true` / `false`
- default: `true`

#### overlay
overlay

- type: `boolean`
- value: `true` / `false`
- default: `true`

## methods

#### show()
show this modal

- params: none
- return: none

#### hide()
hide the modal

- params: none
- return: none

#### destory()
destory the modal in the DOM tree

- params: none
- return: none
