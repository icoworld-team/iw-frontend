import React, { Component } from 'react'
import ChatUser from '../ChatUser'
import './style.css'
import { connect } from "react-redux";
import { withApollo } from 'react-apollo'
import { setContacts, addContact } from "../../actions";
import { GET_CHATS } from '../../api/graphql'
// import {socket} from "../../api";


class ChatContactsList extends Component<any> {

    async componentDidMount() {
        const result = await this.props.client.query({
            query: GET_CHATS,
            variables: {userId: this.props.authUser.id},
            fetchPolicy: 'network-only'
        });
        const contacts = result.data.getChats.slice().reverse();
        this.props.setContacts(contacts);
    }

    render() {
        const { authUser, onSelectUser, contactsList } = this.props;
        const contacts = contactsList.map((contact:any) => (
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
                {contacts}
            </div>
        )
    }
}

const mapStateToProps = ({auth, chat}:any) => {
    return {
        authUser: auth.authUser,
        contactsList: chat.contactsList
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        setContacts: (contacts:any) => dispatch(setContacts(contacts)),
        addContact: (contact:any) => dispatch(addContact(contact))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(ChatContactsList))

