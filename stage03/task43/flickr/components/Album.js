const Album = (
  pictures = []
) => {
  return renderPictures(pictures)
}

function renderPictures (picUrls) {
  const picRatios = picUrls.map(p => p.aspect_ratio)
  const geometry = jjjustify(picRatios)
  
  const boxes = geometry.boxes
    .map(({width, height, top, left}, index) => 
      h('div.box', {
        style: `width: ${width}px; height: ${height}px; top: ${top}px; left: ${left}px`
      }, h('img', {
        src: `${picUrls[index].image.small}`,
        style: 'width: 100%; height: 100%;',
        'data-large': `${picUrls[index].image.large}`,
      }))
    )
    .reduce((fragment, box) => {
      return (fragment.appendChild(box), fragment)
    }, document.createDocumentFragment())
 
  return h('div.album', {
    style: `height: ${geometry.containerHeight}px`,
  }, boxes)
}
