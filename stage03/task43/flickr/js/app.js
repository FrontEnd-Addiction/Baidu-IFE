const geometry = jjjustify([5, 1.2, 2.5], {
})

const boxes = geometry.boxes
  .map(({width, height, top, left}) => {
    return  `<div class="box" style="width: ${width}px; height: ${height}px; top: ${top}px; left: ${left}px"></div>`;
  })
  .join('\n')
  
const container = document.querySelector('main')
container.style.height = geometry.containerHeight + 'px'
container.innerHTML = boxes
