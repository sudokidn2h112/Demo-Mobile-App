import {FETCH_CHU_DE, FETCH_CHU_DE_SUCCESSED, FETCH_CHU_DE_FAILED, FETCH_Y_KIEN, FETCH_Y_KIEN_SUCCESSED, FETCH_Y_KIEN_FAILED} from './actionType';

//chu de
export const fetchChuDesAction = (sort) => {
    return {
        type: FETCH_CHU_DE,
        sort
    }
}

export const fetchChuDesSuccessAction = (receivedChuDes) => {
    return {
        type: FETCH_CHU_DE_SUCCESSED,
        receivedChuDes
    }
}

export const fetchChuDesFailedAction = (error) => {
    return {
        type: FETCH_CHU_DE_FAILED,
        error
    }
}

// y kien
export const fetchYKienAction = (sort) => {
    return {
        type: FETCH_Y_KIEN,
        sort
    }
}

export const fetchYKienSuccessAction = (receivedYKien) => {
    return {
        type: FETCH_Y_KIEN_SUCCESSED,
        receivedYKien
    }
}

export const fetchYKienFailedAction = (error) => {
    return {
        type: FETCH_Y_KIEN_FAILED,
        error
    }
}
