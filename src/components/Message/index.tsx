import React from 'react'
import './style.css'

export default function Message({message}:any) {
    return (
        <div className={`message-cell ${message.type === 'sent' ? 'row-reverse' : ''}`}>
            <img className="post-avatar align-self-end" width="40px" height="40px" src="profile.jpeg"/>
            <div className={`bubble ${message.type === 'sent' ? 'sent-message' : ''}`}>
                <div className="message">{message.message}</div>
                <div className="message-time">{message.sentAt}</div>
            </div>
        </div>
    )
}