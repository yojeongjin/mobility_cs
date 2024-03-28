import { combineReducers } from 'redux';

//redux-persist
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';

// reducers
import auth from './auth';
import inform from './inform';
import search from './search';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

const reducer = combineReducers({
  auth,
  inform,
  search,
});

export default persistReducer(persistConfig, reducer);
