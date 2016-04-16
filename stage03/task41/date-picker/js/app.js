const datePicker = new DatePicker({
  callback: render
})

function render () {
  const main = document.querySelector('main')
  main.innerHTML = ''
  main.appendChild(datePicker.render())
}

render()
