const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return action.payload;
    case 'remove':
      return null;
    default:
      return state;
  }
};

export default reducer;
