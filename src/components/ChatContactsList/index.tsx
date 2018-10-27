import React, { Component } from 'react'
import ChatUser from '../ChatUser'
import './style.css'
import { connect } from "react-redux";
import Scrollbars from 'react-custom-scrollbars';
import {Query} from "react-apollo";
import {GET_USER} from "../../api/graphql";
import {endpoint} from "../../api";


class ChatContactsList extends Component<any> {
    state = {
        searchText: '',
    };

    handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { authUser, onSelectUser, contactsList, scrollbarSize} = this.props;
        const filteredContacts = contactsList.filter((chat:any) => chat.parnter.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1);
        const contacts = filteredContacts.map((contact:any) => (
            <ChatUser key={contact.chatId} user={contact} onSelectUser={onSelectUser}/>
        ));
        console.log(scrollbarSize);
        return (
            <>
                <div className="chat-sidenav-header">
                    <Query query={GET_USER} variables={{ userId: authUser.id }}>
                        {({ loading, error, data }) => {
                            if (loading) return null;
                            if (error) return `Error: ${error}`;
                            const user = data.getUser;
                            return (
                                <div className="chat-main-user-block">
                                    <div className="chat-user-avatar">
                                        <div className="chat-user-avatar-mode">
                                            <img className="chat-avatar" width="50px" src={user.avatar ? `${endpoint}/images/${user.id}/${user.avatar}` : "profile.jpeg"}/>
                                            <span className="chat-status online" />
                                        </div>
                                    </div>
                                    <div className="chat-main-user-info">
                                        <span className="user-info-name">{user.name}</span>
                                        <div className="last-message-time">{'@' + user.login}</div>
                                    </div>
                                </div>
                            )
                        }}
                    </Query>
                    <div className="search-wrapper">
                        <div className="search-bar">
                            <div className="search-form">
                                <input className="chat-search-input" type="search" name="searchText" placeholder="Search" onChange={this.handleChange}/>
                                <button className="search-icon"><i className="zmdi zmdi-search zmdi-hc-lg"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-tab">
                    <span>Contacts</span>
                </div>
                <Scrollbars autoHide style={{ height: '100%' }}>
                    {contacts}
                </Scrollbars>
            </>
        )
    }
}

// const updateContacts = (contactsList:any, chatMessages:any, authUser:any) => {
//     const updatedContacts = contactsList.map((contact:any) => {
//         let count = 0;
//         chatMessages[contact.chatId] && chatMessages[contact.chatId].forEach((message:any) => {
//             if (!message.read && message.author.id !== authUser.id) ++count;
//         });
//         return (
//             {
//                 ...contact,
//                 lastMessage: chatMessages[contact.chatId] ? chatMessages[contact.chatId][chatMessages[contact.chatId].length-1] : contact.messages[contact.messages.length-1],
//                 newMessages: count
//             }
//         )});
//     const sortedContacts = updatedContacts.slice().sort((a:any, b:any) => {
//         return new Date(b.lastMessage.date).getTime() - new Date(a.lastMessage.date).getTime();
//     });
//     return sortedContacts;
// };

const mapStateToProps = ({auth, chat}:any) => {
    return {
        authUser: auth.authUser,
        contactsList: chat.contactsList,
        chatMessages: chat.chatMessages,
        scrollbarSize: chat.scrollbarSize
    }
};

export default connect(mapStateToProps)(ChatContactsList)

