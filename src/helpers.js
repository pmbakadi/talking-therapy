const H = {}

const BOUND_ALREADY_THERE = 10

H.slowScrollToHeight = function slowScrollToHeight(height, ogHeight) {
  // minimum height
  height = Math.max(height, 0)
  // safety back to 0
  height = height < 10 ? 0 : height
  // maximum height
  height = Math.min(height, document.body.clientHeight - window.innerHeight)
  // TODO: bug here... gets called twice somewhow
  if (!ogHeight && H._alreadyThere(height)) {
    return
  }

  const timeDelta = 3
  const currentHeight = window.scrollY
  ogHeight = ogHeight || currentHeight
  const delta = H._getDelta(currentHeight, height, ogHeight)
  let scrollF = null
  if (currentHeight < height) {
    scrollF = () => {
      window.scrollTo(0, Math.min(currentHeight + delta, height))
      slowScrollToHeight(height, ogHeight)
    };
  } else if (currentHeight > height) {
    scrollF = () => {
      window.scrollTo(0, Math.max(currentHeight - delta, height))
      slowScrollToHeight(height, ogHeight)
    };
  } else {
    return
  }
  setTimeout(scrollF, timeDelta)
}

H._getDelta = function _getDelta(currentHeight, height, ogHeight) {
  const min = 3
  const max = 27
  const ratio = 0.6
  const deltaTP = (height - ogHeight) * ratio
  const turningPoint = ogHeight + deltaTP

  // Below I'm just using the slope formula given:
  // x1 = ogHeight, x2 = turningPoint, y1 = min, y2 = max OR
  // x1 = turningPoint, x2 = height, y1 = max, y2 = min
  // for the first case (deltaTP > 0) and similar for second case

  // going up, deltaTP is positive
  if (ogHeight < height) {
    // speeding up
    if (currentHeight < turningPoint) {
      const slope = (max - min)/(turningPoint - ogHeight)
      const zeroth_point = min - (ogHeight * slope)
      return zeroth_point + currentHeight * slope
    }
    // slowing down
    const slope = (min - max)/(height - turningPoint)
    const zeroth_point = max - turningPoint * slope
    return zeroth_point + currentHeight * slope
  }

  // going down, deltaTP is negative

  // speeing up
  if (currentHeight > turningPoint) {
    const slope = (min - max)/(ogHeight - turningPoint)
    const zeroth_point = max - slope * turningPoint
    return zeroth_point + currentHeight * slope
  }

  // slowing down
  const slope = (max - min)/(turningPoint - height)
  const zeroth_point = min - slope * height
  return zeroth_point + currentHeight * slope
}

H._alreadyThere = function _alreadyThere(height) {
  const currentHeight = window.scrollY
  const diff = Math.abs(height - currentHeight)
  return diff < BOUND_ALREADY_THERE
}

export default H
