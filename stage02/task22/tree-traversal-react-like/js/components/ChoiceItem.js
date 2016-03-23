const ChoiceItem = ({
  id,
  text,
  checked
}) => {
  const props = {
    type: 'radio',
    name: 'choice',
    value: id,
    id
  }
  checked && (props.checked = 'checked')

  const input = h('input', props)

  const label = h('label', {for: id}, text)

  return h('li', {class: 'choice-item'}, [input, label])
}
