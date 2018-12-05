import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import {socket} from "../../api";
import Send from '@material-ui/icons/Send';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    chatFooter: {
        display: 'flex',
        flexWrap: 'nowrap',
        width: '100%',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e9ecef',
    },
    footerRow: {
        display: 'flex',
        width: '100%',
        padding: '16px',
    },
    chatForm: {
        width: '100%',
        paddingLeft: '12px',
        paddingRight: '24px',
    },
    chatTextArea: {
        height: '40px',
        width: '100%',
        resize: 'none',
        padding: '.375rem .75rem',
        border: 0,
        borderRadius: 0,
        fontFamily: '\'Open Sans\', sans-serif',
        fontSize: '14px',
    },
});

class ChatInput extends Component<any> {
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
        const { classes } = this.props;
        return (
            <div className={classes.chatFooter}>
                <div className={classes.footerRow}>
                    <div className={classes.chatForm}>
                        <div style={{position: 'relative'}}>
                            <textarea className={`border-input ${classes.chatTextArea}`}
                              name="message" id="message" value={this.state.message} onChange={this.handleChange} onKeyUp={this.handleKeyUp}
                              placeholder="Type and hit enter to send message" style={{minHeight: 60, height: this.state.textAreaHeight}} />

                            <textarea className={`border-input ${classes.chatTextArea}`}
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
                    <IconButton aria-label="Send message" onClick={this.handleSendMessage}>
                        <Send/>
                    </IconButton>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ChatInput)
