import React,{Component} from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import InsertPhoto from '@material-ui/icons/InsertPhoto'
import InsertDriveFile from '@material-ui/icons/InsertDriveFile'

const styles = () => createStyles({
    postInput: {
        marginTop: '25px',
        borderBottom: '1px solid black',
        paddingBottom: '5px'
    },
    postTextarea: {
        width: '100%',
        margin: '0 auto',
        outline: 'none',
        resize: 'none',
        padding: '7px 10px',
        boxSizing: 'border-box'
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
                {/* <TextField className={classes.textInput} fullWidth multiline rows="6"/> */}
                <textarea name="post" id="postTextarea" className={classes.postTextarea} rows={6}></textarea>
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