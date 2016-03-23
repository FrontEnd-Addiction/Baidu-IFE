// class Canvas {
//   constructor (context) {
//     this.context = context
//   }
//
//   drawCircle (x, y, radius, data) {
//     const {context} = this
//
//     context.beginPath()
//     context.arc(x, y, radius, 0, 2 * Math.PI)
//     context.stroke()
//     context.closePath()
//     context.strokeText(data, x, y)
//   }
//
//   drawLine (x, y, toX, toY) {
//     const {context} = this
//
//     context.beginPath()
//     context.moveTo(x, y)
//     context.lineTo(toX, toY)
//     context.stroke()
//   }
// }

class Line {
  draw (x, y, toX, toY, context) {
    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(toX, toY)
    context.stroke()
  }
}

class Circle {
  constructor (x, y, radius) {
    this.x = x || 0
    this.y = y || 0
    this.radius = radius

    this.leftX = x - 3 * radius
    this.leftY = y + 3 * radius

    this.rightX = x + 3 * radius
    this.rightY = y + 3 * radius

    this.lineStartX = x
    this.linestartY = y + radius
    this.lineEndX = this.leftX
    this.lineEndY = this.leftY - radius
  }

  draw (context) {
    const {x, y, radius, data} = this

    context.beginPath()
    context.arc(x, y, radius, 0, 2 * Math.PI)
    context.stroke()
    context.closePath()
    context.strokeText(data, x, y)
  }
}
