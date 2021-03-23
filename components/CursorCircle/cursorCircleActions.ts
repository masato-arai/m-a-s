const enlargeCircle = status => ({
  type: 'ENLARGE_CIRCLE',
  status,
})

const shrinkCircle = status => ({
  type: 'SHRINK_CIRCLE',
  status,
})

export default {
  enlargeCircle,
  shrinkCircle,
}