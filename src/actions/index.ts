export const userSignIn = (user:any) => {
    return {
        type: 'SIGNIN',
        payload: user
    }
};

export const logOut = () => {
    return {
        type: 'LOGOUT'
    }
};

export const investorsFilter = (filter:any) => {
    return {
        type: 'FILTER',
        payload: filter
    }
};