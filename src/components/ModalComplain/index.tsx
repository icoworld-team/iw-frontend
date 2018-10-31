import React from "react";
import { withStyles, createStyles } from '@material-ui/core/styles'
import Dialog from "@material-ui/core/Dialog";
import Button from '@material-ui/core/Button'

const styles = () => createStyles({
    modal: {
        padding: '10px 15px 15px 15px',
        backgroundColor: '#fff',
        width: '445px',
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
        fontFamily: 'Open Sans',
        fontSize: '14px',
    },
    button: {
        minWidth: "85px",
        minHeight: "25px",
        fontSize: "12px",
        fontFamily: 'Open Sans',
    },
});

class ModalComplain extends React.Component<any> {
    state = {
        message: ''
    };

    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    sendMessage = () => {
        this.setState({message: ''});
        this.props.onClose();
    };

    render() {
        const classes = this.props.classes;

        return (
            <Dialog PaperProps={{square: true}} onClose={this.props.onClose} open={this.props.open}>
                <div className={classes.modal}>
                    <div className={classes.modalTitle}>Complain</div>

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
                            Complain
                        </Button>
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default withStyles(styles)(ModalComplain);
