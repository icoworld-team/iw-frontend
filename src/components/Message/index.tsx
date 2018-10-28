import React from 'react'
import './style.css'
import {connect} from "react-redux";
import { chatTime } from '../../utils'
import {endpoint} from "../../api";

function Message({message, authUser}:any) {
    return (
        <div className={`message-cell ${message.author.id === authUser.id ? 'row-reverse' : ''}`}>
            <img className="post-avatar align-self-end" width="40px" height="40px" src={message.author.avatar ? `${endpoint}/images/${message.author.id}/${message.author.avatar}` : "profile.jpeg"}/>
            <div className={`bubble ${message.author.id === authUser.id ? 'sent-message' : ''}`}>
                <div className="message">{message.content}</div>
                <div className="message-time">{chatTime(message.date)}</div>
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