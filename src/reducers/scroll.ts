const initialState = {
    top: 0,
};

export const scroll = (state = initialState, action:any) => {
    switch (action.type) {
        case 'SCROLL':
            return {
                top: action.payload
            };
        default:
            return state;
    }
};
