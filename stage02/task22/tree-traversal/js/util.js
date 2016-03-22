const createElement = (type, attrs, text) => {
  const element = document.createElement(type)
  Object.keys(attrs).forEach(key =>
    element.setAttribute(key, attrs[key])
  )
  element.textContent = text

  return element
}

const range = (min, max) =>
  Math.floor(min + Math.random() * max)

const randomSet = n =>
  Array.from(Array(n)).reduce((prev, current) => {
    while (true) {
      const item = range(0, 100)
      return !prev.has(item) && (prev.add(item))
    }
  }, new Set())
