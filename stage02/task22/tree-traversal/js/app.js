(() => {
  const mainView = document.querySelector('main')
  const traverseBtn = document.querySelector('#traversing')
  const resetBtn = document.querySelector('#reset')
  let tree

  const renderTree = () => {
    mainView.innerHTML = ''

    tree = new BinaryTree(mainView)

    randomSet(5).forEach(item =>
      tree.insert(item)
    )
  }
  renderTree()

  const traversing = () => {
    const choice = document.querySelector('[name=choice]:checked')
    tree.traverse(choice.id)
    tree.play()
  }

  traverseBtn.addEventListener('click', traversing, false)
  resetBtn.addEventListener('click', renderTree, false)
})()
