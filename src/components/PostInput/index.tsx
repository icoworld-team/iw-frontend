import React,{Component} from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import InsertPhoto from '@material-ui/icons/InsertPhoto'
import InsertDriveFile from '@material-ui/icons/InsertDriveFile'
import './style.css'

const styles = () => createStyles({
    postInput: {
        margin: '20px 0',
    },
    attachment: {
        display: 'none',
    },
    textInput: {
        backgroundColor: '#ececec',
    }
});

class PostInput extends Component<any> {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.postInput}>
                <TextField className={classes.textInput} fullWidth multiline rows="6"/>
                <Button variant="raised" color="primary">Post</Button>
                <input className={classes.attachment} id="image-file" type="file" accept="image/*"/>
                <label htmlFor="image-file">
                    <IconButton color="primary" component="span">
                        <InsertPhoto/>
                    </IconButton>
                </label>
                <input className={classes.attachment} id="file" type="file"/>
                <label htmlFor="file">
                    <IconButton color="primary" component="span">
                        <InsertDriveFile/>
                    </IconButton>
                </label>
            </div>
        )
    }
}

export default withStyles(styles)(PostInput);