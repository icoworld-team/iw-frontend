const initialState = {
    contactsList: [],
    chatMessages: {}
};

export const chat = (state = initialState, action:any) => {
    switch (action.type) {
        case 'SET_CONTACTS':
            const contacts = action.payload.contacts.map((contact:any) => {
                let count = 0;
                state.chatMessages[contact.chatId] && state.chatMessages[contact.chatId].forEach((message:any) => {
                    if (!message.read && message.author.id !== action.payload.id) ++count;
                });
                return (
                    {
                        ...contact,
                        lastMessage: state.chatMessages[contact.chatId] ? state.chatMessages[contact.chatId][state.chatMessages[contact.chatId].length-1] : contact.messages[contact.messages.length-1],
                        newMessages: count
                    }
                )});
            contacts.sort((a:any, b:any) => {
                return new Date(b.lastMessage.date).getTime() - new Date(a.lastMessage.date).getTime();
            });
            return {
                ...state,
                contactsList: contacts
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
                contactsList: state.contactsList.concat(action.payload),
                chatMessages: {...state.chatMessages, [action.payload.chatId]: action.payload.messages}
            };
        case 'ADD_MESSAGE':
            const newMessages = {
                ...state.chatMessages,
                [action.payload.chatId]: state.chatMessages[action.payload.chatId] ? (state.chatMessages[action.payload.chatId] as any).concat(action.payload) : [].concat(action.payload)
            };
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
        case 'READ_MESSAGES':
            const readMessages = state.chatMessages[action.payload].map((message:any) => ({
                ...message,
                read: true
            }));
            return {
                ...state,
                chatMessages: {
                    ...state.chatMessages,
                    [action.payload]: readMessages
                }
            };
        case 'SET_INITIAL_MSG':
            return {
                ...state,
                chatMessages: action.payload
            };
        case 'UPDATE_CONTACTS':
            const updatedContacts = state.contactsList.map((contact:any) => {
                let count = 0;
                state.chatMessages[contact.chatId] && state.chatMessages[contact.chatId].forEach((message:any) => {
                    if (!message.read && message.author.id !== action.payload) ++count;
                });
                return (
                    {
                        ...contact,
                        lastMessage: state.chatMessages[contact.chatId] ? state.chatMessages[contact.chatId][state.chatMessages[contact.chatId].length-1] : contact.messages[0],
                        newMessages: count
                    }
                )});
            updatedContacts.sort((a:any, b:any) => {
                return new Date(b.lastMessage.date).getTime() - new Date(a.lastMessage.date).getTime();
            });
            return {
                ...state,
                contactsList: updatedContacts
            };
        case 'CHAT_UNMOUNT':
            return initialState;
        default:
            return state;
    }
};
