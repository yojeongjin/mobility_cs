import { all } from 'redux-saga/effects';

import { authSaga } from './auth';
import { informSaga } from './inform';

export default function* rootSaga() {
  yield all([authSaga(), informSaga()]);
}
