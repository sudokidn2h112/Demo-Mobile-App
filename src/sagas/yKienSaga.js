import { FETCH_CHU_DE, FETCH_CHU_DE_SUCCESSED, FETCH_CHU_DE_FAILED, FETCH_Y_KIEN, FETCH_Y_KIEN_SUCCESSED, FETCH_Y_KIEN_FAILED} from '../actions/actionType';

import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';

import Api from './Api';

function* fetchYKien(action) {
    try {
        const receivedYKien = yield call(Api.getYKienFromApi);
        if (receivedYKien) {
            yield put({ type: FETCH_Y_KIEN_SUCCESSED, receivedYKien});
        } else {
            yield put({ type: FETCH_Y_KIEN_FAILED, error });
        }
           
    } catch (error) {
        yield put({ type: FETCH_Y_KIEN_FAILED, error });
    }
}
export function* watchFetchYKien() {
    yield takeLatest(FETCH_Y_KIEN, fetchYKien);
}