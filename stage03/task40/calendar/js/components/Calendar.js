class Calendar {
  constructor (
    options = {}
  ) {
    this.options = Object.assign({
      root: document.body,
      callback: () => ({}) // when select date, call the function
    }, options)

    this.selectedDate = moment()

    this.render()
  }

  render () {
    this.calendar && this.calendar.remove()

    this.month = h('select', {class: 'month-selected', onChange: this.selectMonth.bind(this)},
      moment.monthsShort().reduce((prev, current, index) => {
        prev.appendChild(
          index === this.selectedDate.month()
            ? h('option', {selected: true, value: current}, current)
            : h('option', {value: current}, current)
        )
        return prev
      }, document.createDocumentFragment())
    )

    this.year = h('select', {class: 'year-selected', onChange: this.selectYear.bind(this)},
      range(1940, 2020).reduce((prev, current) => {
        prev.appendChild(
          current === this.selectedDate.year()
            ? h('option', {selected: true, value: current}, current)
            : h('option', {}, current)
        )
        return prev
      }, document.createDocumentFragment())
    )

    this.header = h('header', {class: 'calendar-header'},
      h('a', {class: 'prev', onClick: this.prevMonth.bind(this)}, '&larr;'),
      this.month,
      this.year,
      h('a', {class: 'next', onClick: this.nextMonth.bind(this)}, '&rarr;')
    )

    this.weeks = h('div', {class: 'calendar-weeks'},
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        .reduce((prev, current) => {
          return (prev.appendChild(h('span', {class: 'calendar-week-name'}, current)), prev)
        }, document.createDocumentFragment())
    )
    
    this.days = h('div', {class: 'calendar-days'},
      this.getDays().reduce((prev, current) => {
        const week = h('div', {class: 'calendar-week'}, this.buildWeek(current))
        return (prev.appendChild(week), prev)
      }, document.createDocumentFragment())
    )

    this.calendar = h('div', {class: 'calendar', onClick: this.selectDate.bind(this)},
      this.header,
      this.weeks,
      this.days
    )

    this.options.root.appendChild(this.calendar)
    return this.calendar
  }

  // go to previous month
  prevMonth () {
    this.selectedDate.subtract(1, 'month')
    this.render()
  }

  // go to next month
  nextMonth () {
    this.selectedDate.add(1, 'month')
    this.render()
  }

  // select a year
  selectYear (e) {
    this.selectedDate.year(e.target.value)
    this.render()
  }

  // select a month
  selectMonth (e) {
    this.selectedDate.month(e.target.value)
    this.render()
  }

  selectDate ({
    target
  }) {
    if (target.className.indexOf('day-name') === -1) return

    this.selectedDate = moment(target.dataset.value)
    this.render()
    this.options.callback()

    return this.selectedDate.clone()
  }

  // build days of a week
  buildWeek (week) {
    return week.reduce((prev, current) => {
      const {day, isCurrentMonth, isToday, date, isSelected} = current

      prev.appendChild(
        h('span', {
          'data-value': date,
          class: 'calendar-day-name' +
            (isToday ? ' isToday' : '') +
            (isCurrentMonth ? ' isCurrentMonth' : '') +
            (isSelected ? ' isSelected' : '')
        }, day)
      )

      return prev
    }, document.createDocumentFragment())
  }

  getDays () {
    const firstDayOfMonth = this.selectedDate.clone().date(1)
    const sundayOfMonth = firstDayOfMonth.clone().day(0)
    let start = sundayOfMonth.clone()

    let weeks = []

    while (true) {
      weeks.push(Array.from(Array(7)).map(i => {
        const dayObj = {
          day: start.date(),
          date: start.clone().format('YYYY-MM-DD'),
          isToday: start.isSame(moment(), 'day'),
          isSelected: start.isSame(this.selectedDate, 'day'),
          isCurrentMonth: start.month() === this.selectedDate.month()
        }
        start.add(1, 'day')

        return dayObj
      }))

      if (firstDayOfMonth.month() !== start.month()) break
    }
    return weeks
  }
}

