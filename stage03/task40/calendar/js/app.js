var main = document.querySelector('main')

const calendar = new Calendar({
  root: main,
  callback
})

function callback () {
  document.querySelector('.selectedDate').innerHTML =
    calendar.selectedDate.format('DD MMMM YYYY')
}
callback()

