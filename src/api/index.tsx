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