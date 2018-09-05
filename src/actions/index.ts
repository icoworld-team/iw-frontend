export const userSignIn = (user:any) => {
    return {
        type: 'SIGNIN',
        payload: user
    }
};

export const investorsFilter = (filter:any) => {
    return {
        type: 'FILTER',
        payload: filter
    }
};