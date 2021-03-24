const initialState = {
  isOnLink: false,
  leftPosition: 0,
  topPosition: 0,
}

const cursor = (state = initialState, action) => {
  switch (action.type) {
    case 'CIRCLE_POSITION':
      return {
        ...state,
        leftPosition: action.status.leftPosition,
        topPosition: action.status.topPosition,
      }
    case 'ENLARGE_CIRCLE':
      return {
        ...state,
        isOnLink: true
      }
    case 'SHRINK_CIRCLE':
      return {
        ...state,
        isOnLink: false
      }
    default:
      return state
  }
}

export default cursor
