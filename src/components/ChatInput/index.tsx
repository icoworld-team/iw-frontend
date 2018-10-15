import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import {socket} from "../../api";

export default class ChatInput extends Component<any> {
    state = {
        message: ''
    };

    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSendMessage = () => {
        socket.emit('newMessage', {
            text: this.state.message,
            partnerId: this.props.id
        });
        console.log('emitted');
        this.setState({
            message: ''
        });
    };

    render() {
        return (
            <div className="chat-footer">
                <div className="footer-row">
                    <div className="chat-form">
                            <textarea name="message" className="chat-textarea" placeholder="Type and hit enter to send message"
                                      value={this.state.message} onChange={this.handleChange}/>
                    </div>
                    <div className="send-button">
                        <IconButton aria-label="Send message" onClick={this.handleSendMessage}>
                            <i className="zmdi  zmdi-mail-send"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
}