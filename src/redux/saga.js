import { call, takeEvery, put } from 'redux-saga/effects';
import * as actions from './action';
import * as apis from '../api';

function* fetchAds(action) {
  try {
    yield put({ type: actions.AD_REQUEST })
    const payload = yield call(apis.getAds);
    yield put({ type: actions.GET_ADS, payload })
    yield put({ type: actions.AD_SUCCESS })
  } catch (error) {
    let errMsg = {
      status: error.response.status,
      statusText: error.response.statusText
    }

    yield put({ type: actions.AD_FAILURE, errMsg })
  }
}

export default function* mySaga() {
  yield takeEvery(actions.AD, fetchAds);
}