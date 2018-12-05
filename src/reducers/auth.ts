const initialState = {
    authUser: JSON.parse((localStorage.getItem('user')) as string)
};

export const auth = (state=initialState, action:any) => {
    switch (action.type) {
        case 'SIGNIN':
            return {
                authUser: action.payload
            };
        case 'LOGOUT':
            return {
                authUser: null
            };
        default:
            return state;
    }
};
