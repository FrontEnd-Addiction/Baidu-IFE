const App = props => {
  let node = null // HTML Element of the App

  // App's initial state
  let state = {
    items: randomSet(5),
    choice: 'inOrder'
  }

  function onResetTree () {
    state.items = randomSet(5)
    render()
  }

  function onUpdateChoice (e) {
    const target = e.target
    target.name === 'choice' && (state.choice = target.id)
  }

  function render () {
    // = =
    const tree = Tree({items: state.items})

    const children = [
      Toolbar({
        choice: state.choice,
        onResetTree,
        onUpdateChoice,
        // I have no idea how to T-T
        // call the `traverse` method in the Tree component
        onTraverse: () => {
          tree.refs.traverse(state.choice)
          tree.refs.play()
        }
      }),
      tree
    ]

    if (node == null) {
      return (node = h('div', {}, children))
    } else {
      node.innerHTML = ''
      return (node = appendChildren(node, children))
    }
  }

  return render()
}
