export const userSignIn = (user:any) => {
    return {
        type: 'SIGNIN',
        payload: user
    }
};