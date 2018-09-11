const authInitialState = {
  authUser: JSON.parse((localStorage.getItem('user')) as string)
};

export const auth = (state=authInitialState, action:any) => {
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

export const investorsFilter = (state={
    filter: {}
}, action:any) => {
    switch (action.type) {
        case 'FILTER':
            return {
                filter: action.payload
            };
        default:
            return state;
    }
};
