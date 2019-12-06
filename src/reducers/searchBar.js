const searchBarDefaultState = true;

export default (state = searchBarDefaultState, action) => {
  switch (action.type) {
    case 'SHOW_SEARCH':
      return true;
    case 'HIDE_SEARCH':
      return false;
    default:
      return state;
  }
};