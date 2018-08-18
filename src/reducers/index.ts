export const auth = (state:any, action:any) => {
    switch (action.type) {
        case 'SIGNIN':
            return {
                authUser: action.payload
            };
        default:
            return state;
    }
};
