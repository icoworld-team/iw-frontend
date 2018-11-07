export const endpoint = 'http://icoworld.projects.oktend.com:3000';

export const handleErrors = (response:any) => {
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
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
