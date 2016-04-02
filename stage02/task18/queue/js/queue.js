class Queue {
  constructor (data) {
    this.data = data || []
  }

  enqueue (value) {
    this.data = [...this.data, value]
  }

  dequeue () {
    this.data = this.data.slice(1)
  }

  render (selector) {
    const el = document.querySelector(selector)
    const fragment = document.createDocumentFragment()

    this.data.forEach(d => {
      const item = document.createElement('li')
      item.textContent = d

      fragment.appendChild(item)
    })

    el.appendChild(fragment)
  }

  print () {
    console.log(this.data)
  }
}
