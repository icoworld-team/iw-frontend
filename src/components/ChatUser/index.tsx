import React from 'react'
import './style.css'
import { chatTime } from '../../utils'
import {endpoint} from "../../api";

export default function ChatUser({user, onSelectUser}:any) {
        const lastMessage = user.lastMessage ? user.lastMessage: user.messages[0];
        return (
            <div className="chat-user" onClick={() => onSelectUser(user)}>
                <div className="chat-user-avatar">
                    <div className="chat-user-avatar-mode">
                        <img className="chat-avatar" width="40px" src={user.parnter.avatar ? `${endpoint}/images/${user.parnter.id}/${user.parnter.avatar}` : "profile.jpeg"}/>
                        {/*<span className={`chat-status small ${user.status}`} />*/}
                    </div>
                </div>
                <div className="chat-user-info">
                    <span className="user-info-name">{user.parnter.name}</span>
                    <div className="last-message-info">{lastMessage.content.length > 25 ? lastMessage.content.substring(0,25) + "..." : lastMessage.content}</div>
                    <div className="last-message-time">{chatTime(lastMessage.date)}</div>
                </div>
                <div className="messages-badge-block">
                    <div className="messages-badge">{user.newMessages > 0 ? user.newMessages : null}</div>
                </div>
            </div>
        )
}