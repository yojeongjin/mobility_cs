import axios from 'axios';
import { createActions, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

const initialState = {
  inform: [],
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
      inform: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      inform: [],
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

async function getInformAPI(reqData) {
  const res = await axios.post('http://223.130.140.159:1880/chatbot/readRequest', reqData);

  return res.data;
}

function* getInformSaga(action) {
  try {
    yield put(pending());
    const info = yield call(getInformAPI, action.payload);
    if (info.result === 'PF_200') {
      yield put(success(info.data));
    } else {
      yield put(fail('환불조회건이 없습니다.'));
    }
  } catch (error) {
    yield put(fail('UNKNOWN_ERROR'));
  }
}
