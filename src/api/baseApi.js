import axios from 'axios';

export const getAxios = async (apiUrl, apiCall=[], apiConfig=null) => {
    return await axios.get(apiUrl, apiCall, apiConfig)
    .then(res => {
        console.log('from getAxios: ', res);
        console.log('from getAxios: ', res.data);
        Promise.resolve(res);
    }).catch(err => {
        console.log('from catch getAxios: ', err);
        Promise.reject(err);
    });    
}

export const postAxios = async (apiUrl, apiCall=[], apiConfig=null) => {
    return await axios.post(apiUrl, apiCall, apiConfig)
    .then(res => {
        return res;
    }).catch(err => {
        return err;
    });
}

export const putAxios = async (apiUrl, apiCall=[], apiConfig=null) => {
    return await axios.put(apiUrl, apiCall, apiConfig)
    .then(res => {
        return res;
    }).catch(err => {
        return err;
    });
}

export const deleteAxios = async (apiUrl, apiCall=[], apiConfig=null) => {
    return await axios.delete(apiUrl, apiCall, apiConfig)
    .then(res => {
        return res;
    }).catch(err => {
        return err;
    });
}