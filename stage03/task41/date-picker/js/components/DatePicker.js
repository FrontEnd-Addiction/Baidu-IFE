const InputComponet = ({
  date,
  onClickIcon
}) =>
  h('div.datepicker-control', {},
    h('input.datepicker-input', {
      type: 'search',
      autofocus: true,
      value: date
    }),

    h('span.datepicker-icon', {
      title: 'click and pick a date',
      onClick: onClickIcon
    })
  )

class DatePicker {
  constructor (options = {}) {
    this.options = Object.assign({
      date: '',
      format: 'YYYY-MM-DD',
      callback: () => ({})
    }, options)
  }

  render () {
    const {date} = this.options

    // input component
    this.input = InputComponet({
      date,
      onClickIcon: this.toggleCalendar.bind(this)
    })

    // date picker component
    this.datePicker = h('div.datepicker', {},
      this.input
    )

    // init 'esc' event
    this.destoryCalendar()

    return this.datePicker
  }

  pickDate (date) {
    const {format, callback} = this.options

    this.options.date = date.format(format)
    this.toggleCalendar()
    callback()
  }

  toggleCalendar () {
    if (this.calendar) {
      this.calendar.destory()
      this.calendar = null
      return
    }

    this.calendar = new Calendar({
      initDate: this.options.date,
      root: this.datePicker,
      callback: this.pickDate.bind(this)
    })
  }

  destoryCalendar () {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.calendar && this.toggleCalendar()
      }
    }, false)
  }
}
