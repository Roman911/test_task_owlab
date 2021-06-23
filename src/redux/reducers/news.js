const initialState = {
  news: []
}

const news = (state = initialState, actions) => {
  switch (actions.type) {
    case 'NEWS:FETCH_NEWS':
      return {
        ...state,
        news: actions.payload
      }
    default:
      return state
  }
}

export default news