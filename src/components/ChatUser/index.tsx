import React from 'react'
import './style.css'
import { relativeTime } from '../../utils'

export default function ChatUser({user, onSelectUser}:any) {
        return (
            <div className="chat-user" onClick={() => onSelectUser(user)}>
                <div className="chat-user-avatar">
                    <div className="chat-user-avatar-mode">
                        <img className="chat-avatar" width="40px" src={'profile.jpeg'}/>
                        <span className={`chat-status small ${user.status}`} />
                    </div>
                </div>
                <div className="chat-user-info">
                    <span className="user-info-name">{user.parnter.name}</span>
                    <div className="last-message-info">{user.lastMessage.content.length > 25 ? user.lastMessage.content.substring(0,25) + "..." : user.lastMessage.content}</div>
                    <div className="last-message-time">{relativeTime(user.lastMessage.date)}</div>
                </div>
                <div className="messages-badge-block">
                    <div className="messages-badge">{user.unreadMessages}</div>
                </div>
            </div>
        )
}