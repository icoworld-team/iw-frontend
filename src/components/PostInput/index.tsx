import React,{Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Mutation } from 'react-apollo';
import { CREATE_POST, SEARCH_POST_IN_PROFILE } from '../../api/graphql';


const styles = () => createStyles({
    postInput: {
        marginBottom: '15px',
        padding: '20px 15px 10px 15px',
    },
    postTextarea: {
        width: '100%',
    },
    attachment: {
        display: 'none',
    },
    textInput: {
        backgroundColor: '#ececec',
    },
    inputHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: '10px'
    },
    inputHeaderText: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginLeft: '10px',
    },
    userInfo: {
        display: 'inline-flex',
        alignItems: 'flex-end',
    },
    userName: {
        color: '#171717',
        fontWeight: 600,
        margin: 0,
        fontSize: '14px',
        lineHeight: '19px',
    },
    userLogin: {
        color: '#8b8b8b',
        fontSize: '14px',
        lineHeight: '19px',
    },
    avatar: {
        width: '38px',
        height: '38px',
    },
    postButton: {
        float: 'right',
        minWidth: '85px',
        minHeight: '30px',
        fontSize: '14px',
        marginTop: '7px'
    }
});

class PostInput extends Component<any> {
    state = {
        postBody: ''
    };

    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const {classes, authUserId} = this.props;
        const postInput = {
            userId: authUserId,
            content: this.state.postBody
        };
        return (
            <div className={`card ${classes.postInput}`}>
                {/* <TextField className={classes.textInput} fullWidth multiline rows="6"/> */}
                <div className={classes.inputHeader}>
                    <Avatar className={classes.avatar} src="profile.jpeg"/>
                    <div className={classes.inputHeaderText}>
                        <div className={classes.userInfo}>
                            <Typography className={classes.userName}>{this.props.authUser.name}</Typography>
                        </div>
                        <Typography className={classes.userLogin}>{`@${this.props.authUser.name}`}</Typography>
                    </div>
                </div>

                <TextField InputProps={{ disableUnderline: true, classes: {input: `input border-input`} }}
                    name="postBody" id="postTextarea" value={this.state.postBody} onChange={this.handleChange}
                    className={classes.postTextarea} multiline rows="6" placeholder="Write something..." />

                <Mutation mutation={CREATE_POST} onCompleted={() => this.setState({postBody: ''})}
                    onError={(error) => console.log(error)}
                    update={(cache, {data: {createPost}}) => {
                        console.log(createPost.content);
                        const data = cache.readQuery({
                            query: SEARCH_POST_IN_PROFILE,
                            variables: {userId: authUserId, searchText: ""}
                        });
                        const posts = (data as any).searchPostInProfile.posts.concat(createPost);
                        cache.writeQuery({
                            query: SEARCH_POST_IN_PROFILE,
                            variables: {userId: authUserId, searchText: ""},
                            data: {searchPostInProfile: {
                                    ...(data as any).searchPostInProfile,
                                    posts: posts,
                            }}
                        });
                    }}>
                    {createPost => {
                        return <Button className={`button fill-button ${classes.postButton}`} variant="raised"
                            color="primary"
                            onClick={() => {if (this.state.postBody.length) 
                                {
                                    createPost({ variables: { input: postInput } })
                                }
                            }}>Post</Button>
                    }}
                </Mutation>
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