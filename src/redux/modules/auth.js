import axios from 'axios';
import { createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = 'cs/auth';

export const { pending, success, fail } = createActions('PENDING', 'SUCCESS', 'FAIL', { prefix });

const reducer = handleActions(
  {
    PENDING: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

// saga

export const { signin, signout } = createActions('SIGNIN', 'SIGNOUT', { prefix });

export function* authSaga() {
  yield takeEvery(`${prefix}/SIGNIN`, signinSaga);
  yield takeEvery(`${prefix}/SIGNOUT`, signoutSaga);
}

async function signinAPI(reqData) {
  const res = await axios.post('http://223.130.140.159:1880/admin/login', reqData);
  return res.data;
}
// signin
function* signinSaga(action) {
  try {
    yield put(pending());
    const user = yield call(signinAPI, action.payload);
    if (user.result === 'PF_200') {
      yield put(success(user.data.token));
    } else {
      yield put(fail('UNKNOWN_ERROR'));
    }
  } catch (err) {
    yield put(fail('UNKNOWN_ERROR'));
    console.log(err);
  }
}

// signout
function* signoutSaga() {
  try {
    yield put(pending());
    yield put(success(null));
  } catch (error) {
    yield put(fail(error));
  } finally {
    window.location.reload();
  }
}
