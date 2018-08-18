export const handleErrors = (response:any) => {
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
};

export const fetchPost = (url:string, data:object) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
};