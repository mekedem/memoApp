import { createStore, combineReducers } from 'redux';
import searchBarReducer from '../reducers/searchBar';
import memosReducer from '../reducers/memos';

export default () => {
  const store = createStore(
    combineReducers({
      searchbar: searchBarReducer,
      memos: memosReducer
    })
  );

  return store;
};
