interface MousePositionStatus {
  mousePositionLeft: number;
  mousePositionTop: number;
}

interface MainNavStatus {
  playgroundVisible: boolean;
}

const mousePosition = (status: MousePositionStatus) => ({
  type: 'MOUSE_POSITION',
  status,
})

const enlargeCursor = () => ({
  type: 'ENLARGE_CURSOR',
})

const shrinkCursor = () => ({
  type: 'SHRINK_CURSOR',
})

const mainNav = (status: MainNavStatus) => ({
  type: 'MAIN_NAV',
  status,
})

export default {
  mousePosition,
  enlargeCursor,
  shrinkCursor,
  mainNav,
}