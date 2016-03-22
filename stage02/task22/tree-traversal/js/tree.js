class Node extends Circle {
  constructor (x, y, radius, data) {
    super(x, y, radius)

    this.data = data
    this.left = null
    this.right = null
  }

  print () {
    console.log(this.data)
  }
}

class BinaryTree {
  // cavas context
  constructor (context) {
    this.context = context
    this.root = null
  }

  insert (data) {
    // set root node if it's empty
    if (this.root == null) {
      const newNode = new Node(200, 20, 20, data)
      this.root = newNode
      this.root.draw(this.context)
      return
    }

    let current = this.root

    while (true) {
      let parent = current // save tmp-ly

      if (data < current.data) {
        const newNode = new Node(
          parent.leftX, parent.leftY,
          parent.radius, data
        )

        current = current.left

        if (current == null) {
          parent.left = newNode

          newNode.draw(this.context)

          const line = new Line()
          line.draw(
            parent.x, parent.y + parent.radius,
            newNode.x, newNode.y - parent.radius,
            this.context
          )
          return
        }
      } else if (data > current.data) {
        const newNode = new Node(
          parent.rightX, parent.rightY,
          parent.radius, data
        )

        current = current.right

        if (current == null) {
          parent.right = newNode

          newNode.draw(this.context)

          const line = new Line()
          line.draw(
            parent.x, parent.y + parent.radius,
            newNode.x, newNode.y - parent.radius,
            this.context
          )
          return
        }
      } // if
    } // while
  }

  traverse (node) {
    if (node == null) return

    this.traverse(node.left)
    node.print()
    this.traverse(node.right)
  }
}
