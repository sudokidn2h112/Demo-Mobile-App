import { urlGetChuDe, urlGetYKien, urlGetCoQuan } from '../../commons/constURL';
import base64 from 'base-64';

const username = "admin";
const password = "dtt@2016123!@#";
const authorization = 'Basic' + base64.encode(username + ":" + password);

const headers = new Headers();
//headers.append("Content-Type", "application/x-www-form-urlencoded");
headers.append("Authorization", "Basic YWRtaW46ZHR0QDIwMTYxMjMhQCM=");
// var request = new Request(urlGetYKien, {
//     method: "GET",
//     headers: headers
// });
function* getChuDeFromApi() {
    try {
        let response = yield fetch(urlGetChuDe, {method:'GET',
        headers: headers,
       })
        const chuDe = yield response.status === 200 ? JSON.parse(response._bodyInit) : null
        return chuDe;
    } catch (error) {
        console.log(`error : ${error}`)
    }

}

function* getYKienFromApi() {
    try {
        let response = yield fetch(urlGetYKien, {method:'GET',
        headers: headers,
       })
       console.log(`response y kien == ${JSON.stringify(response._bodyInit)}`);
        const yKien = yield response.status === 200 ? JSON.parse(response._bodyInit) : null
        return yKien;
    } catch (error) {
        console.log(`error : ${error}`)
    }

}

export default {
    getChuDeFromApi,
    getYKienFromApi,
}; 