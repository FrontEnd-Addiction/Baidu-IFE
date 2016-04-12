// hyper script
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
      ? el.textContent = child
      : el.appendChild(child)
  })

  return el
}

class Modal {
  constructor (
    options = {}
  ) {
    // default options
    this.options = Object.assign({
      title: '',
      msg: '',
      button: 'OK',
      type: 'success',
      close: true,
      overlay: true
    }, options)

    const {
      title, msg, button,
      type, overlay
    } = this.options

    this.title = h('h2', {class: 'modal-title'}, title)
    this.msg = h('p', {class: 'modal-msg'}, msg)

    this.closeBtn = h('a', {
      class: 'modal-close',
      onClick: this.destory.bind(this)
    }, 'x')

    this.button = h('a', {
      class: `modal-button ${type}`,
      onClick: this.destory.bind(this)
    }, button)

    // set overlay
    if (overlay) {
      this.overlay = h('div', {
        class: 'modal-overlay',
        onClick: this.destory.bind(this)
      })
    }

    // create modal component
    this.modal = h('div', {class: 'modal'},
      h('header', {class: 'modal-header'}, this.title, this.closeBtn),
      h('div', {class: `modal-body ${type}`}, this.msg),
      h('footer', {class: 'modal-footer'}, this.button)
    )

    // init
    this.render()
    setTimeout(this.show.bind(this), 1000)
  }

  show () {
    this.modal.classList.add('active')
    this.overlay.classList.add('active')
  }

  hide () {
    this.modal.classList.remove('active')
    this.overlay.classList.remove('active')
  }

  destory () {
    this.hide()

    setTimeout(() => {
      this.modal.remove()
      this.overlay.remove()
    }, 1000)
  }

  render () {
    document.body.appendChild(this.modal)
    this.options.overlay && (document.body.appendChild(this.overlay))
  }
}
