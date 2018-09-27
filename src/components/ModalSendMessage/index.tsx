import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { socket } from '../../api'

const styles = () => createStyles({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        backgroundColor: '#fafafa',
        width: '400px',
        borderRadius: '10px',
        transform: 'translate(-50%, -50%)',
    },
    modalTitle: {
        backgroundColor: '#3f51b5',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px 5px 0 0'
    },
    modalBody: {
        padding: '10px'
    },
    modalFooter: {
        float: 'right',
        padding: '10px'
    },
    textArea: {
        width: '100%',
        outline: 'none',
        resize: 'none',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        boxSizing: 'border-box'
    },
});

class ModalSendMessage extends Component<any> {
    state = {
        message: ''
    };


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
                    <div className={classes.modalBody}>
                        <textarea className={classes.textArea} name="message" rows={6} value={this.state.message} onChange={this.handleChange}></textarea>
                    </div>
                    <div className={classes.modalFooter}>
                        <Button color="primary" onClick={this.sendMessage}>Send</Button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default withStyles(styles)(ModalSendMessage)