(() => {
  const data = [42, 3, 24, 33]
  const queue = new Queue(data)

  const render = () => {
    $('#queue').innerHTML = ''
    queue.render('#queue')
  }
  render()

  const input_ = Rx.Observable
    .fromEvent($('#input'), 'input')
    .map(e => e.target.value)
    .startWith(null)

  Rx.Observable
    .fromEvent($('#enqueueBtn'), 'click')
    .withLatestFrom(
      input_,
      (_, input) => input
    )
    .subscribe(value => {
      queue.enqueue(value)
      render()
    })

  Rx.Observable
    .fromEvent($('#dequeueBtn'), 'click')
    .subscribe(() => {
      queue.dequeue()
      render()
    })
})()
