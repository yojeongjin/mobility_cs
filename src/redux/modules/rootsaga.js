import { all } from 'redux-saga/effects';

import { informSaga } from './inform';

export default function* rootSaga() {
  yield all([informSaga()]);
}
