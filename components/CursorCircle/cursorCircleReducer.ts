const initialState = {
  isOnLink: false
}

const cursor = (state = initialState, action) => {
  switch (action.type) {
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
