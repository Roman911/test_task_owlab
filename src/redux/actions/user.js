const Actions = {
  setData: (data) => {
    return {
      type: 'USER:SET_DATA',
      payload: data
    }
  }
}

export default Actions