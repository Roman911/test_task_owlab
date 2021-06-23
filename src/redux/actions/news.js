const Actions = {
  showLoading: () => {
    return {
      type: 'LOADING:SHOW_LOADING'
    }
  },
  hideLoading: () => {
    return {
      type: 'LOADING:HIDE_LOADING'
    }
  },
  fetchNews: () => {
    return async dispatch => {
      dispatch(Actions.showLoading())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await response.json()
      dispatch({ type: 'NEWS:FETCH_NEWS', payload: json })
      dispatch(Actions.hideLoading())
    }
  }
}

export default Actions