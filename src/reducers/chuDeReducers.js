import { FETCH_CHU_DE_SUCCESSED, FETCH_CHU_DE_FAILED} from '../actions/actionType';
const initialState = {
    dataSource: [],
};


export default function chuDeReducers(chuDe = initialState, action = {}) {
    switch (action.type) {
        //chu de
        case FETCH_CHU_DE_SUCCESSED:
            return Object.assign({}, chuDe, {
                dataSource: action.receivedChuDes,
            })

        case FETCH_CHU_DE_FAILED:
            return [];

        default:
            return chuDe; //state does not change
    }
}
