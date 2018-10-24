import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { socket } from '../../api'

const styles = () => createStyles({
    modal: {
        padding: '10px 15px 15px 15px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        backgroundColor: '#fff',
        width: '445px',
        transform: 'translate(-50%, -50%)',
        '&:focus': {
            outline: 'none',
        }
    },
    modalTitle: {
        color: '#171717',
        marginBottom: '10px',
        fontSize: '18px',
    },
    modalBody: {},
    modalFooter: {
        textAlign: 'right',
    },
    textArea: {
        width: '100%',
        resize: 'none',
        height: '150px',
    },
    button: {
        minWidth: "85px",
        minHeight: "25px",
        fontSize: "12px",
        fontFamily: 'Open Sans',
    },
});

class ModalSendMessage extends Component<any> {
    state = {
        message: ''
    };

    handleClose = () => {};
    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    sendMessage = () => {
        // socket.on('connect', () => {
        //     socket.emit('newMessage', {
        //         text: this.state.message,
        //         partnerId: "5b9a85271c8fd447c309f4b6"
        //     });
        // });
        socket.emit('newMessage', {
            text: this.state.message,
            partnerId: this.props.partnerId
        });
        this.setState({message: ''});
        this.props.onClose();
    };

    render() {
        const classes = this.props.classes;
        return (
            <Modal open={this.props.open} onClose={this.props.onClose}>
                <div className={classes.modal}>
                    <div className={classes.modalTitle}>New message</div>
                    <div style={{marginBottom: '10px'}}>
                        <textarea className={`input border-input ${classes.textArea}`}
                            name="message" id="message" value={this.state.message} onChange={this.handleChange}
                            placeholder="Write something..." />
                    </div>
                    <div className={classes.modalFooter}>
                        <Button variant="outlined" color="secondary" className={`button outline-button ${classes.button}`} onClick={this.props.onClose} style={{marginRight: '5px'}}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="secondary" className={`button fill-button ${classes.button}`} onClick={this.sendMessage}>
                            Send
                        </Button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default withStyles(styles)(ModalSendMessage)