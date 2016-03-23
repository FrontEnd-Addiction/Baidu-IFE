const Buttons = ({
  onTraverse,
  onResetTree
}) => {
  const traverseBtn = h('button', {
    id: 'traversing',
    onClick: onTraverse
  }, 'traverse')

  const resetBtn = h('button', {
    id: 'reset',
    onClick: onResetTree
  }, 'reset Tree')

  return h('div', {class: 'buttons'}, [traverseBtn, resetBtn])
}
