const initialState = {
  cursorIsOnLink: false,
  mousePositionLeft: 0,
  mousePositionTop: 0,
  playgroundVisible: false,
}

const main = (state = initialState, action) => {
  switch (action.type) {
    case 'MOUSE_POSITION':
      return {
        ...state,
        mousePositionLeft: action.status.mousePositionLeft,
        mousePositionTop: action.status.mousePositionTop,
      }
    case 'ENLARGE_CURSOR':
      return {
        ...state,
        cursorIsOnLink: true
      }
    case 'SHRINK_CURSOR':
      return {
        ...state,
        cursorIsOnLink: false
      }
    case 'MAIN_NAV':
      return {
        ...state,
        playgroundVisible: action.status.playgroundVisible,
      }
    default:
      return state
  }
}

export default main
