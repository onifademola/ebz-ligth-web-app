import axios from 'axios';

export const getAxios = async (apiUrl, apiCall=[], apiConfig=null) => {
    return await axios.get(apiUrl, apiCall, apiConfig)
    .then(res => {
        return res;
    }).catch(err => {
        return err;
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