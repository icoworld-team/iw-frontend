import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { withStyles, createStyles } from '@material-ui/core/styles'
import {UPDATE_USER, UPLOAD_FILE} from "../../api/graphql"
import { withApollo } from "react-apollo"

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
        padding: '10px',
        textAlign: 'center'
    },
    attachment: {
        display: 'none',
    }
});

class ModalSendMessage extends Component<any> {
    state = {
        message: ''
    };

    handleChange = ({target: {validity, files: [file]}}:any) => {
        console.log(file);
        if(validity.valid) {
            this.props.client.mutate({
                mutation: UPLOAD_FILE,
                variables: {userId: this.props.id, file: file || {text: '123123'} }
            }).then((data:any) => {
                console.log(data);
                this.props.client.mutate({
                    mutation: UPDATE_USER,
                    variables: {input: {
                            id: this.props.id,
                            photo: data.uploadFile
                        }},
                }).then((data:any) => console.log(data));
            });
        }
    };

    render() {
        const classes = this.props.classes;
        return (
            <Modal open={this.props.open} onClose={this.props.onClose}>
                <div className={classes.modal}>
                    <div className={classes.modalTitle}>Upload Photo</div>
                    <div className={classes.modalBody}>
                        <input className={classes.attachment} id="image" type="file"
                               onChange={this.handleChange}/>
                        <label htmlFor="image">
                            <Button color="primary" component="span">Select photo</Button>
                        </label>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default withStyles(styles)(withApollo(ModalSendMessage))