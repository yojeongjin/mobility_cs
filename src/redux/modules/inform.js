import axios from 'axios';
import { createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

const initialState = {
  informs: null,
  loading: false,
  error: null,
};

const prefix = 'cs/inform';

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
      informs: action.payload,
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

export const { getInform } = createActions('GET_INFORM', { prefix });

export function* informSaga() {
  yield takeEvery(`${prefix}/GET_INFORM`, getInformSaga);
}

async function getInfomAPI(reqData) {
  return await axios.post('http://223.130.140.159:1880/chatbot/readRequest', reqData);
}

function* getInformSaga(action) {
  try {
    yield put(pending());
    yield call(getInfomAPI, action.payload);
  } catch (error) {
    yield put(fail('UNKNOWN_ERROR'));
  }
}
