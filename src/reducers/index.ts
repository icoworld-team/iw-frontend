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


const chatInitialState = {
    contactsList: [],
    chatMessages: {}
};
export const chat = (state=chatInitialState, action:any) => {
    switch (action.type) {
        case 'SET_CONTACTS':
            return {
                ...state,
                contactsList: action.payload
            };
        case 'SET_MESSAGES':
            return {
                ...state,
                chatMessages: {
                    ...state.chatMessages,
                    [action.payload.id]: action.payload.messages
                }
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contactsList: state.contactsList.concat(action.payload)
            };
        case 'ADD_MESSAGE':
            console.log('payload');
            console.log(action.payload.chatId);
            console.log('chatMessages');
            console.log(state.chatMessages);
            console.log('chatMessages+payload');
            console.log(state.chatMessages[action.payload.chatId]);
            const newMessages = {
                ...state.chatMessages,
                [action.payload.chatId]: (state.chatMessages[action.payload.chatId] as any).concat(action.payload)
            };
            console.log('newMessages');
            console.log(newMessages);
            return {
                ...state,
                chatMessages: newMessages
            };

        case 'ADD_OLDER_MESSAGES':
            return {
                ...state,
                chatMessages: {
                    ...state.chatMessages,
                    [action.payload.id]: [...action.payload.messages, ...state.chatMessages[action.payload.id]]
                }
            };

        case 'CHAT_UNMOUNT':
            return chatInitialState;
        default:
            return state;
    }
};
