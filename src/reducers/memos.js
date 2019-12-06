const memosReducerDefaultState = [];

export default (state = memosReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MEMO':
        return [
        ...state,
        action.memo
      ];
    case 'DELETE_MEMO':
        return state.filter(({ memoId }) => memoId !== action.memoId);
    default:
      return state;
  }
};