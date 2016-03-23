const Toolbar = ({
  choice,
  onTraverse,
  onResetTree,
  onUpdateChoice
}) => {
  return h('div', {class: 'toolbar'}, [
    ChoiceList({
      onUpdateChoice,
      choice
    }),
    Buttons({
      onTraverse,
      onResetTree
    })
  ])
}
