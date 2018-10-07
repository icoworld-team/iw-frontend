import React, { Component } from 'react'
import ChatUser from '../ChatUser'
import './style.css'
import { connect } from "react-redux";
import { withApollo } from 'react-apollo'
import { setContacts, addContact } from "../../actions";
// import {socket} from "../../api";
import Scrollbars from 'react-custom-scrollbars';


class ChatContactsList extends Component<any> {

    render() {
        const { authUser, onSelectUser, contactsList, chatMessages} = this.props;
        const updatedContacts = contactsList.map((contact:any) => (
            {
                ...contact,
                lastMessage: chatMessages[contact.chatId] ? chatMessages[contact.chatId][chatMessages[contact.chatId].length-1] : contact.lastMessage
            }
        ));
        const sortedContacts = updatedContacts.slice().sort((a:any, b:any) => {
            return new Date(b.lastMessage.date).getTime() - new Date(a.lastMessage.date).getTime();
        });
        const contacts = sortedContacts.map((contact:any) => (
            <ChatUser key={contact.chatId} user={contact} onSelectUser={onSelectUser}/>
        ));
        return (
            <div>
                <div className="chat-sidenav-header">
                    <div className="chat-main-user-block">
                        <div className="chat-user-avatar">
                            <div className="chat-user-avatar-mode">
                                <img className="chat-avatar" width="50px" src="profile.jpeg"/>
                                <span className="chat-status online" />
                            </div>
                        </div>
                        <div className="chat-main-user-info">
                            <span className="user-info-name">{authUser.name}</span>
                            <div className="last-message-time">{'@' + authUser.name}</div>
                        </div>
                    </div>
                    <div className="search-wrapper">
                        <div className="search-bar">
                            <div className="search-form">
                                <input className="chat-search-input" type="search" placeholder="Search" />
                                <button className="search-icon"><i className="zmdi zmdi-search zmdi-hc-lg"/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-tab">
                    <span>Contacts</span>
                </div>
                <Scrollbars autoHide style={{height: 650}}>
                    {contacts}
                </Scrollbars>
            </div>
        )
    }
}

const mapStateToProps = ({auth, chat}:any) => {
    return {
        authUser: auth.authUser,
        contactsList: chat.contactsList,
        chatMessages: chat.chatMessages
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        setContacts: (contacts:any) => dispatch(setContacts(contacts)),
        addContact: (contact:any) => dispatch(addContact(contact))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(ChatContactsList))

