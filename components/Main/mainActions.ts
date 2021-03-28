const mousePosition = status => ({
  type: 'MOUSE_POSITION',
  status,
})

const enlargeCursor = () => ({
  type: 'ENLARGE_CURSOR',
})

const shrinkCursor = () => ({
  type: 'SHRINK_CURSOR',
})

export default {
  mousePosition,
  enlargeCursor,
  shrinkCursor,
}