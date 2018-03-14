//Saga effects
import { fork } from 'redux-saga/effects';
//Add movie
import { watchFetchChuDe } from './chuDeSaga';

import { watchFetchYKien } from './yKienSaga';

export default function* rootSaga() {
    yield [
        fork(watchFetchChuDe),
        fork(watchFetchYKien),
    ];
}