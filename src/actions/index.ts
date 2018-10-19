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

export const investorsFilter = (filter:any) => {
    return {
        type: 'FILTER',
        payload: filter
    }
};

export const setContacts = (contacts:any) => {
    return {
        type: 'SET_CONTACTS',
        payload: contacts
    }
};

export const setMessages = (messages:any) => {
    return {
        type: 'SET_MESSAGES',
        payload: messages
    }
};

export const addContact = (contact:any) => {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
};

export const addMessage = (message:any) => {
    return {
        type: 'ADD_MESSAGE',
        payload: message
    }
};

export const addOlderMessages = (messages:any) => {
    return {
        type: 'ADD_OLDER_MESSAGES',
        payload: messages
    }
};

export const readMessages = (chatId:any) => {
    return {
        type: 'READ_MESSAGES',
        payload: chatId
    }
};

export const setInitialMsg = (messages:any) => {
    return {
        type: 'SET_INITIAL_MSG',
        payload: messages
    }
};

export const chatUnMount = () => {
    return {
        type: 'CHAT_UNMOUNT'
    }
};

export const tagSearch = (tag:any) => {
    return {
        type: 'SEARCH',
        payload: tag
    }
};