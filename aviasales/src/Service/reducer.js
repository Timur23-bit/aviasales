import { combineReducers } from 'redux';
import reduceFetch from './reduceFetch';
import reduceFilters from './reduceFilters';
import reduceSort from './reduceSort';

const reducer = combineReducers({
  reduceSort,
  reduceFetch,
  reduceFilters,
});

export default reducer;
