class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null

    this.el = null
  }

  active () {
    this.el.classList.add('active')
  }

  print () {
    console.log(this.data)
  }

  draw (parent) {
    const el = createElement('div', {
      class: 'node',
      'data-value': this.data
    }, this.data)

    this.el = el

    const existedChild = parent.children[0]
    const newValue = parseInt(el.dataset.value)

    existedChild == null || newValue > parseInt(existedChild.dataset.value)
      ? parent.appendChild(el)
      : parent.insertBefore(el, existedChild)
  }
}

class BinaryTree {
  constructor (rootElement) {
    this.root = null
    this.rootElement = rootElement || document.body
    this.queue = [] // animation quque
  }

  insert (data) {
    // set root node if it's empty
    if (this.root == null) {
      const newNode = new Node(data)
      this.root = newNode
      this.root.draw(this.rootElement)
      return
    }

    let current = this.root

    while (true) {
      let parent = current // save tmp-ly

      if (data < current.data) {
        const newNode = new Node(data)

        current = current.left

        if (current == null) {
          parent.left = newNode
          newNode.draw(parent.el)
          return
        }
      } else if (data > current.data) {
        const newNode = new Node(data)

        current = current.right

        if (current == null) {
          parent.right = newNode
          newNode.draw(parent.el)
          return
        }
      } else {
        throw Error('Binary Tree can not have 2 same value')
      } // if
    } // while
  }

  traverse (choice) {
    switch (choice) {
      case 'preOrder':
        this.preOrder(this.root)
        break

      case 'postOrder':
        this.postOrder(this.root)
        break

      default:
        this.inOrder(this.root)
    }
  }

  // root -> left -> right
  preOrder (node) {
    if (node == null) return

    this.queue.push(node.active.bind(node))
    node.print()
    this.preOrder(node.left)
    this.preOrder(node.right)
  }

  // left -> root -> right
  inOrder (node) {
    if (node == null) return

    this.inOrder(node.left)
    this.queue.push(node.active.bind(node))
    node.print()
    this.inOrder(node.right)
  }

  // left -> right -> root
  postOrder (node) {
    if (node == null) return

    this.postOrder(node.left)
    this.postOrder(node.right)
    this.queue.push(node.active.bind(node))
    node.print()
  }

  play () {
    // remove finish
    Array.prototype.forEach.call(
      document.querySelectorAll('.done'),
      item =>
        item.classList.remove('done')
      )

    // do animation
    const intervalId = setInterval(() => {
      const active = document.querySelector('.active')
      active && active.classList.remove('active')
      active && active.classList.add('done')

      this.queue.length === 0
        ? clearInterval(intervalId)
        : this.queue.shift()()
    }, 1000)
  }
}
