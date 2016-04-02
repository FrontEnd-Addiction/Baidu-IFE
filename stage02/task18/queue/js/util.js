const $ = selector => {
  const el = document.querySelectorAll(selector)

  return el.length === 1 ? el[0] : el
}
