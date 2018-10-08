import React, { Component } from 'react'
import ChatUser from '../ChatUser'
import './style.css'
import { connect } from "react-redux";
import Scrollbars from 'react-custom-scrollbars';


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
        const { authUser, onSelectUser, contactsList, chatMessages} = this.props;
        const updatedContacts = contactsList.map((contact:any) => (
            {
                ...contact,
                lastMessage: chatMessages[contact.chatId] ? chatMessages[contact.chatId][chatMessages[contact.chatId].length-1] : contact.lastMessage
            }
        ));
        const filteredContacts = updatedContacts.filter((chat:any) => chat.parnter.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1);
        const sortedContacts = filteredContacts.slice().sort((a:any, b:any) => {
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
                                <input className="chat-search-input" type="search" name="searchText" placeholder="Search" onChange={this.handleChange}/>
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

export default connect(mapStateToProps)(ChatContactsList)

