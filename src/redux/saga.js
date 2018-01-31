import { call, takeEvery, put } from 'redux-saga/effects';
import * as actions from './action';
import * as apis from '../api';

function* fetchAds(action) {
  try {
    const payload = yield call(apis.getAds);
    yield put({ type: actions.GET_ADS, payload })
  } catch (error) {
    console.log('err: %o', error)
  }
}

export default function* mySaga() {
  yield takeEvery(actions.AD, fetchAds);
}