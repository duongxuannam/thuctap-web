import axios from 'axios';
import * as Config from './config';

export default function callApi(endpoint, method = 'GET', body){
    // console.log(`${Config.API_URL}/${endpoint}`)
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};