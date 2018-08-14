import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import InsertPhoto from '@material-ui/icons/InsertPhoto'
import InsertDriveFile from '@material-ui/icons/InsertDriveFile'
import './style.css'

class PostInput extends Component {

    render() {
        return (
            <div className="post-input">
                <TextField fullWidth multiline rows="6"/>
                <Button variant="raised" color="primary">Post</Button>
                <input className="attachment" id="image-file" type="file" accept="image/*"/>
                <label htmlFor="image-file">
                    <IconButton color="primary" component="span">
                        <InsertPhoto/>
                    </IconButton>
                </label>
                <input className="attachment" id="file" type="file"/>
                <label htmlFor="file">
                    <IconButton color="primary" component="span">
                        <InsertDriveFile/>
                    </IconButton>
                </label>
            </div>
        )
    }
}

export default PostInput