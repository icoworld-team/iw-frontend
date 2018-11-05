import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import {socket} from "../../api";
import Send from '@material-ui/icons/Send';

export default class ChatInput extends Component<any> {
    state = {
        message: '',
        textAreaHeight: 60
    };

    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        let shadowTextArea: any = document.getElementById('shadowTextArea');
        shadowTextArea.value = e.target.value;
        let height = shadowTextArea.scrollHeight;
        if(height < 120) {
            this.setState({
                textAreaHeight: height
            });
        }
    };

    handleSendMessage = () => {
        socket.emit('newMessage', {
            text: this.state.message,
            partnerId: this.props.id
        });
        this.setState({
            message: '',
            textAreaHeight: 60
        });
    };

    handleKeyUp = (event:any) => {
        if(event.keyCode == 13) {
            this.handleSendMessage();
        }
    };

    render() {
        return (
            <div className="chat-footer">
                <div className="footer-row">
                    <div className="chat-form">
                        <div style={{position: 'relative'}}>
                            <textarea className={`border-input chat-textarea`}
                              name="message" id="message" value={this.state.message} onChange={this.handleChange} onKeyUp={this.handleKeyUp}
                              placeholder="Type and hit enter to send message" style={{minHeight: 60, height: this.state.textAreaHeight}} />

                            <textarea className={`border-input chat-textarea`}
                                      name="shadowTextArea" id="shadowTextArea" value={this.state.message}
                                      placeholder="Type and hit enter to send message"
                                      style={{
                                          overflow: 'hidden',
                                          position: 'absolute',
                                          visibility: 'hidden',
                                          whiteSpace: 'pre-wrap'}} rows={1} tabIndex={-1} />
                        </div>
                            {/*<textarea name="message" className="chat-textarea" placeholder="Type and hit enter to send message"*/}
                                      {/*value={this.state.message} onChange={this.handleChange}/>*/}
                    </div>
                    <div className="send-button">
                        <IconButton aria-label="Send message" onClick={this.handleSendMessage}>
                            <Send/>
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
}