import React from 'react'
import ChatUser from '../ChatUser'
import './style.css'

export default function ChatContactsList({onSelectUser}:any) {
    const data = [
        {
            id: 1,
            name: 'John Jones',
            pic: 'profile.jpeg',
            status: 'online',
            lastMessage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            lastMessageTime: 'Yesterday',
            unreadMessages: '2'
        },
        {
            id: 2,
            name: 'Jason Voorhees',
            pic: 'profile.jpeg',
            status: 'offline',
            lastMessage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            lastMessageTime: 'Yesterday',
            unreadMessages: '3'
        },
        {
            id: 3,
            name: 'Bruce Bowen',
            pic: 'profile.jpeg',
            status: 'offline',
            lastMessage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            lastMessageTime: 'Yesterday',
            unreadMessages: '1'
        },
        {
            id: 4,
            name: 'Elon Musk',
            pic: 'profile.jpeg',
            status: 'online',
            lastMessage: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
            lastMessageTime: 'Yesterday',
            unreadMessages: ''
        }
    ];

    const users = data.map(function(user) {
        return <ChatUser key={user.id} user={user} onSelectUser={onSelectUser}/>
    });


    return (
        <div>
            <div className="chat-sidenav-header">
                <div className="chat-main-user-block">
                    <div className="chat-user-avatar">
                        <div className="chat-user-avatar-mode">
                            <img className="post-avatar" width="50px" src="profile.jpeg"/>
                            <span className="chat-status online" />
                        </div>
                    </div>
                    <div className="chat-main-user-info">
                        <span className="user-info-name">Ivan Fedotov</span>
                        <div className="last-message-time">@iyufedotov</div>
                    </div>
                </div>
                <div className="search-wrapper">
                    <div className="search-bar">
                        <div className="search-form">
                            <input className="search-input" type="search" placeholder="Search" />
                            <button className="search-icon"><i className="zmdi zmdi-search zmdi-hc-lg"/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-tab">
                <span>Contacts</span>
            </div>
            {users}
        </div>
    )
}