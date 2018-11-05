export const endpoint = 'http://icoworld.projects.oktend.com:3000';

export const handleErrors = (response:any) => {
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
};

export const fetchPost = (url:string, data:object) => {
    return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
};

export const fetchGet =  (url:string) => {
    return fetch(url, {
        method: 'GET',
        mode: 'cors',
        credentials: "include",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
};

export const sendEmail = (addr:string, title:string, content:string) => {
    return fetch(`${endpoint}/sendEmail`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({addr, title, content}),
        credentials: "include",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => handleErrors(response));
};

import io from 'socket.io-client'
export const socket = io(endpoint, { transports: ['websocket'], autoConnect: false });