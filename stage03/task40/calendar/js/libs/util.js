const isNode = node =>
  node && node.nodeType ? true : false

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
    isNode(child) ? el.appendChild(child) : el.innerHTML += child
  })

  return el
}

const range = (
  start = 0,
  end
) => {
  return Array.from(Array(end - start + 1))
    .map((item, index) => index + start)
}

const flat = array =>
  array.reduce((prev, item) => {
    return prev.concat(
      Array.isArray(item) ? flat(item) : item
    )
  }, [])
