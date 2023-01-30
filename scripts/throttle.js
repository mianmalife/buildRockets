function debounce(func, wait, option) {
  let lastArgs, lastThis, maxWait, result, timerId, lastCallTime
  let lastInvokeTime = 0
  let leading = false
  let maxing = false
  let trailing = true

  function invokeFunc() {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastInvoke < 0 ||
      (maxing && timeSinceLastInvoke >= maxWait)
    )
  }

  function startTimer(pendingFunc, wait) {
    return setTimeout(pendingFunc, wait)
  }

  function trailingEdge() {
    timerId = undefined
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }

    lastArgs = lastThis = undefined
    return result
  }

  function remainingWaite(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall

    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting
  }

  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }

    timerId = startTimer(timerExpired, remainingWaite(time))
  }
  function leadingEdge(time) {
    lastInvokeTime = time
    timerId = startTimer(timerExpired, wait)
  }

  function debounced(...args) {
    const time = Date.now()
    const isInvoking = shouldInvole(time)

    lastArgs = args
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
    }

    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait)
    }
    return result
  }

  return debounced
}
