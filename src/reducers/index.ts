const initialState = {
  auth: null
};

export const auth = (state=initialState, action:any) => {
    switch (action.type) {
        case 'SIGNIN':
            return {
                authUser: action.payload
            };
        default:
            return state;
    }
};
