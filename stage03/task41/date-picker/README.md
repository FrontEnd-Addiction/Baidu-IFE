# date-picker
a date-picker implement with VanillaJS and momentJS

## Demo
:rocket: [check it out](http://frontend-addiction.github.io/Baidu-IFE/stage03/task41/date-picker/index.html) ~

## Usage
Just new the `DatePicker` class, and pass an option object

```javascript
const datePicker = new DatePicker({
  format: 'YYYY/MM/DD',
  callback: render
})

function render () {
  const main = document.querySelector('main')
  main.innerHTML = ''
  main.appendChild(datePicker.render())
}

render()
```

And the HTML file:

```html
<main></main>
```

## Options
#### format
the format of the date you have picked.
Support format check out the moment.js [doc](http://devdocs.io/moment/index#displaying-format)

- type: `string`
- value: any valid moment.js format string
- default: `YYYY-MM-DD`

#### callback
call this callback function after picking a date

- type: function
- value: any valid function
- default: none

