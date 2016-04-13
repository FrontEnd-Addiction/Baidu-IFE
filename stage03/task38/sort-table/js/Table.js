function h (
  type = 'div',
  props = {},
  ...children
) {
  const el = document.createElement(type)

  // set attributes
  Object.keys(props).forEach(prop => {
    prop.slice(0, 2) === 'on'
      ? el.addEventListener(prop.slice(2).toLowerCase(), props[prop], false)
      : el.setAttribute(prop, props[prop])
  })

  children.forEach(child => {
    child = child || ''
    typeof child === 'string'
      ? el.innerHTML += child
      : el.appendChild(child)
  })

  return el
}

class Table {
  constructor (
    options = {}
  ) {
    // set default options
    this.options = Object.assign({
      theme: '',
      data: [],
      root: document.body,
      sortable: true
    }, options)

    // render it
    this.render()
  }

  sort ({target, currentTarget}) {
    const sort = target.dataset.value
    if (sort !== 'asc' && sort !== 'desc') return 0
    else this.options.sort = sort

    const {data} = this.options
    const columnIndex = data[0].findIndex(d =>
      d === currentTarget.dataset.value
    )

    this.options.data = data
      .slice(0, 1)
      .concat(data.slice(1).sort((a, b) =>
        sort === 'asc'
          ? a[columnIndex] > b[columnIndex] ? -1 : 1
          : b[columnIndex] > a[columnIndex] ? -1 : 1
      ))

    this.table.remove()
    this.render()
  }

  render () {
    const {data, sortable, theme, root} = this.options

    // table heading
    this.heading = data[0].reduce((prev, current) => {
      prev.appendChild(h('th', {
        'data-value': current,
        onClick: this.sort.bind(this)
      },
        current,
        sortable && h('span', {class: 'desc', 'data-value': 'desc'}),
        sortable && h('span', {class: 'asc', 'data-value': 'asc'})
      ))
      return prev
    }, document.createDocumentFragment())

    // table body
    this.tableBody = data.slice(1).reduce((prev, current) => {
      const tr = h('tr', {},
        current.reduce((pre, cur) => {
          pre.appendChild(h('td', {}, cur))
          return pre
        }, document.createDocumentFragment())
      )

      return (prev.appendChild(tr), prev)
    }, document.createDocumentFragment())

    // table component
    this.table = h('table', {class: `pars-table ${theme}`},
      h('thead', {}, h('tr', {}, this.heading)),
      h('tbody', {}, this.tableBody)
    )

    root.appendChild(this.table)
  }
}
