import { combineReducers } from 'redux';
import inform from './inform';

//redux-persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  inform,
});

export default persistReducer(persistConfig, reducer);
