import axios from 'axios';

export const logIn = function(loginCredentials) {
    return axios.post('/api/logIn/', loginCredentials)
    .then(res => res.data)
}

export const logOut = function() {
    return axios.post('/api/logOut/')
    .then(res => res.data)
}