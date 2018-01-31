const initialState = {
  todo: [
    { id: 1, name: '看parcel文档', status: 0 },
    { id: 2, name: 'webpack搭建react', status: 1 },
  ],
  ads: [],
  counter: 0,
  status: {
    ads: {
      isFetching: true,
      errMsg: undefined
    },
    todos: {
      isFetching: true,
      errMsg: undefined,
    }
  }
}

export default initialState;