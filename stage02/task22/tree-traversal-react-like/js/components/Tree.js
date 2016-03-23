const Tree = ({
  items
}) => {
  const render = () => {
    const root = h('div', {class: 'tree'})
    const tree = new BinaryTree(root)

    items.forEach(tree.insert.bind(tree))

    // expose this property for call it's the methods
    // check for `onTraverse` method in the `App.js`
    // I hate this
    root.refs = tree

    return root
  }

  return render()
}
