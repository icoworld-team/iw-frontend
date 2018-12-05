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
