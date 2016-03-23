// (() => {
//   let state = {
//     items: randomSet(5),
//     choice: 'inOrder'
//   }
//
//   const mainView = document.querySelector('main')
//   const choiceList = document.querySelector('ul.choices')
//   const traverseBtn = document.querySelector('#traversing')
//   const resetBtn = document.querySelector('#reset')
//   let tree
//
//   const renderTree = () => {
//     mainView.innerHTML = ''
//
//     tree = new BinaryTree(mainView)
//     state.items.forEach(tree.insert.bind(tree))
//   }
//   renderTree()
//
//   const traversing = () => {
//     tree.traverse(state.choice)
//     tree.play()
//   }
//
//   traverseBtn.addEventListener('click', traversing, false)
//
//   resetBtn.addEventListener('click', () => {
//     state.items = randomSet(5)
//     renderTree()
//   }, false)
//
//   choiceList.addEventListener('click', e => {
//     const target = e.target
//     target.name === 'choice' && (state.choice = target.value)
//   }, false)
// })()

const render = (component, root) => {
  root.innerHTML = ''
  root.appendChild(component)
}

render(App(), document.querySelector('main'))
