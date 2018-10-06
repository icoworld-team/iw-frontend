import React from 'react'
import './style.css'
import {connect} from "react-redux";
import { relativeTime } from '../../utils'

function Message({message, authUser}:any) {
    return (
        <div className={`message-cell ${message.author.id === authUser.id ? 'row-reverse' : ''}`}>
            <img className="post-avatar align-self-end" width="40px" height="40px" src="profile.jpeg"/>
            <div className={`bubble ${message.author.id === authUser.id ? 'sent-message' : ''}`}>
                <div className="message">{message.content}</div>
                <div className="message-time">{relativeTime(message.date)}</div>
            </div>
        </div>
    )
}

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

export default connect(mapStateToProps)(Message)