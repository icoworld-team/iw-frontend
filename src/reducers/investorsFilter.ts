const initialState = {
    filter: {
        sortBy: "REGISTRATION_DATE"
    }
};

export const investorsFilter = (state = initialState, action:any) => {
    switch (action.type) {
        case 'FILTER':
            return {
                filter: action.payload
            };
        default:
            return state;
    }
};
