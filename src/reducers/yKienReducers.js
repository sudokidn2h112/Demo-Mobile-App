import {FETCH_Y_KIEN_SUCCESSED, FETCH_Y_KIEN_FAILED} from '../actions/actionType';
const initialState = {
    dataSource: [],
};


export default function yKienReducers(yKien = initialState, action = {}) {
    switch (action.type) {
        //y kien
        case FETCH_Y_KIEN_SUCCESSED:
            return Object.assign({}, yKien, {
                dataSource: action.receivedYKien,
            })
            
        case FETCH_Y_KIEN_FAILED:
            return [];
            

        default:
            return yKien; //state does not change
    }
}
