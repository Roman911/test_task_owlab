const initialState = {
  data: false
}

const user = (state = initialState, actions) => {
  switch (actions.type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: actions.payload
      }
    default:
      return state
  }
}

export default user