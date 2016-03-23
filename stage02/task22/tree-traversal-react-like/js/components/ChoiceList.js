const ChoiceList = ({
  onUpdateChoice,
  choice
}) => {
  const choices = ['preOrder', 'inOrder', 'postOrder']

  const items = choices.map(c =>
    ChoiceItem({
      id: c,
      text: c,
      checked: c === choice
    })
  )

  return h('ul', {
    class: 'choice-list',
    onClick: onUpdateChoice
  }, items)
}
