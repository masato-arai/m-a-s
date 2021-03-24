const circlePosition = status => ({
  type: 'CIRCLE_POSITION',
  status,
})

const enlargeCircle = status => ({
  type: 'ENLARGE_CIRCLE',
  status,
})

const shrinkCircle = status => ({
  type: 'SHRINK_CIRCLE',
  status,
})

export default {
  circlePosition,
  enlargeCircle,
  shrinkCircle,
}