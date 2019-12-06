export const addMemo = ({
    memoId = '',
    memoTitle = '',
    memoDescription = '',
    memoCategory = '',
    createdAt = ''
} = {}) => ({
    type: 'ADD_MEMO',
    memo: {
        memoId,
        memoTitle,
        memoDescription,
        memoCategory,
        createdAt
      }
  });
  
  export const deleteMemo = ({memoId} = {}) => ({
    type: 'DELETE_MEMO',
    memoId
  });