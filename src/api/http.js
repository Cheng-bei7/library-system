import request from '../utils/request';
/*export const findAll= params=>{
    axios.post(`/login`, params).then(res => res.data);
}*/
export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
