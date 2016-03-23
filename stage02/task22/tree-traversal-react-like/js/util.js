// create element
const h = (type, attrs, children) => {
  const element = document.createElement(type)

  Object.keys(attrs).forEach(key =>
    key.slice(0, 2) !== 'on'
      ? element.setAttribute(key, attrs[key])
      : element.addEventListener(key.slice(2).toLowerCase(), attrs[key])
  )

  if (Array.isArray(children)) {
    let fragment = document.createDocumentFragment()
    children.forEach(child => fragment.appendChild(child))
    element.appendChild(fragment)
  } else {
    element.innerHTML = children || ''
  }

  return element
}

// append multiple children
const appendChildren = (parent, children) => {
  const fragment = children.reduce((prev, child) => {
    return (prev.appendChild(child), prev)
  }, document.createDocumentFragment())

  parent.appendChild(fragment)

  return parent
}

// number => [min, max]
const range = (min, max) =>
  Math.floor(min + Math.random() * max)

// create N unique numbers
const randomSet = n =>
  Array.from(Array(n)).reduce((prev, current) => {
    while (true) {
      const item = range(0, 100)
      if (!prev.has(item)) return prev.add(item)
    }
  }, new Set())
