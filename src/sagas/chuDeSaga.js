import { FETCH_CHU_DE, FETCH_CHU_DE_SUCCESSED, FETCH_CHU_DE_FAILED} from '../actions/actionType';

import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';

import Api from './Api';

function* fetchChuDe(action) {
    try {
        const receivedChuDes = yield call(Api.getChuDeFromApi);
        if (receivedChuDes) {
            yield put({ type: FETCH_CHU_DE_SUCCESSED, receivedChuDes});
        } else {
            yield put({ type: FETCH_CHU_DE_FAILED, error });
        }
           
    } catch (error) {
        yield put({ type: FETCH_CHU_DE_FAILED, error });
    }
}
export function* watchFetchChuDe() {
    yield takeLatest(FETCH_CHU_DE, fetchChuDe);
}