# calendar
a calendar implement with VanillaJS and momentJS

## Demo
:rocket: [check it out](http://jsbin.com/morumi/edit?html,css,js,output) ~

## Usage
Just new the `Calendar` class, and pass an option object

```javascript
var main = document.querySelector('main')

// we instance the Calendar class
const calendar = new Calendar({
  root: main,
  callback
})

function callback () {
  document.querySelector('.selectedDate').innerHTML =
    calendar.selectedDate.format('DD MMMM YYYY')
}
callback() 
```

And the HTML file:

```html
<main></main>
<p> 
  current seleted date: 
  <span class="selectedDate"></span>
</p>
```

## Options
#### root
the container of the calendar component

- type: DOM ELement
- value: any valid DOM Element
- default: `document.body`

#### callback
call this callback function after picking a date

- type: function
- value: any valid function
- default: none

## Resources

- [angularjs calender](https://www.codementor.io/angularjs/tutorial/angularjs-calendar-directives-less-cess-moment-font-awesome)
