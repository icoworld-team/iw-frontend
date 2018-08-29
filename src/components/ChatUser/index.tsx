import React from 'react'
import './style.css'

export default function ChatUser({user, onSelectUser}:any) {
        return (
            <div className="chat-user" onClick={()=> onSelectUser(user)}>
                <div className="chat-user-avatar">
                    <div className="chat-user-avatar-mode">
                        <img className="post-avatar" width="40px" src={user.pic}/>
                        <span className={`chat-status small ${user.status}`} />
                    </div>
                </div>
                <div className="chat-user-info">
                    <span className="user-info-name">{user.name}</span>
                    <div className="last-message-info">{user.lastMessage.substring(0,25) + "..."}</div>
                    <div className="last-message-time">{user.lastMessageTime}</div>
                </div>
                <div className="messages-badge-block">
                    <div className="messages-badge">{user.unreadMessages}</div>
                </div>
            </div>
        )

}