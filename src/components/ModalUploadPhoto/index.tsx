import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { withStyles, createStyles } from '@material-ui/core/styles'
import {UPDATE_USER, UPLOAD_FILE} from "../../api/graphql"
import { withApollo } from "react-apollo"
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = () => createStyles({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        backgroundColor: '#fafafa',
        width: '445px',
        transform: 'translate(-50%, -50%)',
        '&:focus': {
            outline: 'none',
        }
    },
    modalTitle: {
        backgroundColor: '#303546',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        fontSize: '18px',
    },
    modalBody: {
        padding: '15px',
        textAlign: 'center',
        fontFamily: 'Open Sans',
    },
    attachment: {
        display: 'none',
    },
    editButton: {
        minWidth: "85px",
        minHeight: "25px",
        fontSize: "12px",
        fontFamily: 'Open Sans',
    },
});

class ModalUploadPhoto extends Component<any> {
    state = {
        mutation: ''
    };

    handleChange = ({target: {validity, files: [file]}}:any) => {
        this.setState({
            mutation: 'uploading'
        });
        if(validity.valid) {
            this.props.client.mutate({
                mutation: UPLOAD_FILE,
                variables: {file: file}
            }).then((response:any) => {
                console.log(response.data);
                this.props.client.mutate({
                    mutation: UPDATE_USER,
                    variables: {input: {
                            photo: response.data.uploadFile,
                            avatar: response.data.uploadFile
                        }},
                }).then(this.setState({mutation: 'uploaded'}))
            }).then(setTimeout(() => {
                this.setState({mutation: ''});
                this.props.onClose();
            },1000));
        }
    };

    render() {
        const classes = this.props.classes;
        return (
            <Modal open={this.props.open} onClose={this.props.onClose}>
                <div className={classes.modal}>
                    <div className={classes.modalTitle}>Upload Photo</div>
                    {this.state.mutation === 'uploading' ? (
                        <div className={classes.modalBody}>
                            <CircularProgress/>
                        </div>
                    ) : this.state.mutation === 'uploaded' ? (
                        <div className={classes.modalBody}>
                            Uploaded!
                        </div>
                    ) : (
                        <div className={classes.modalBody}>
                            <p style={{marginBottom: '15px', fontSize: '14px'}}>Please, upload a square image for correct display:</p>
                            <input className={classes.attachment} id="image" type="file" accept="image/*"
                                   onChange={this.handleChange}/>
                            <label htmlFor="image">
                                <Button component="span" variant="outlined" color="secondary" className={`button outline-button ${classes.editButton}`}>
                                    Upload
                                </Button>
                            </label>
                        </div>
                    )}
                </div>
            </Modal>
        )
    }
}

export default withStyles(styles)(withApollo(ModalUploadPhoto))