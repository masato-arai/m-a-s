const mousePosition = status => ({
  type: 'MOUSE_POSITION',
  status,
})

const enlargeCursor = status => ({
  type: 'ENLARGE_CURSOR',
  status,
})

const shrinkCursor = status => ({
  type: 'SHRINK_CURSOR',
  status,
})

export default {
  mousePosition,
  enlargeCursor,
  shrinkCursor,
}