import React,{Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import Clear from '@material-ui/icons/Clear';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import { Mutation } from 'react-apollo';
import {ADD_IMAGE, CREATE_POST, SEARCH_POST, SEARCH_POST_IN_PROFILE, UPLOAD_FILE} from '../../api/graphql';
import { withApollo } from "react-apollo"
import CircularProgress from '@material-ui/core/CircularProgress'
import {endpoint} from "../../api";
import PostTextEditor from '../PostTextEditor'

const styles = () => createStyles({
    postInput: {
        marginBottom: '15px',
        padding: '20px 15px 10px 15px',
    },
    postTextarea: {
        width: '100%',
        resize: 'none',
        maxHeight: '418px',
    },
    attachButton: {
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
    createPostBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    postButton: {
        minWidth: '85px',
        minHeight: '30px',
        fontSize: '14px',
        marginTop: '7px'
    },
    inputFiles: {
        display: 'flex',
    },
    attachment: {
        backgroundColor: '#c1c5d2',
        display: 'flex',
        alignItems: 'center',
        marginRight: '5px',
        borderRadius: '4px'
    },
    attachmentText: {
        color: '#fff',
        paddingLeft: '5px'
    },
    iconButton: {
        margin: 0,
        color: '#8b8b8b',
        width: '20px',
        height: '20px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
});


class PostInput extends Component<any> {
    state = {
        postBody: '' as any,
        tags: [],
        attachments: [],
        textareaHeight: 58,
        name: '',
        postBodyJSON: '' as any,
    };

    updateData = (editor: any) => {
        this.setState({ postBody: editor.text, postBodyJSON: editor.value, tags: editor.tags })
    }

    handleChange = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

        let pattern = /(#[\w|а-яА-ЯёЁ]+)/g;
        let arr: Array<String> = e.target.value.match(pattern);
        if(arr) {
            this.setState({
                tags: arr
            });
        } else {
            this.setState({
                tags: []
            });
        }

        let postShadowTextarea: any = document.getElementById('postShadowTextarea');
        postShadowTextarea.value = e.target.value;
        let height = postShadowTextarea.scrollHeight;
        this.setState({
            textareaHeight: height + 20
        });
    };

    handleAttach = ({target: {validity, files: [file]}}:any) => {
        this.setState((state:any) => ({
            attachments: state.attachments.concat({status: 'uploading'})
        }));
        if(validity.valid) {
            this.props.client.mutate({
                mutation: UPLOAD_FILE,
                variables: {file: file}
            }).then((response:any) => {
                let attachments:any = this.state.attachments.slice();
                attachments.pop();
                attachments.push({id: response.data.uploadFile, name: file.name});
                this.setState({
                    attachments: attachments
                });
            })
        }
    };

    handleDeleteAttachment = (index:number) => () => {
        this.setState((state:any) => ({
            attachments: [...state.attachments.slice(0,index), ...state.attachments.slice(index+1)]
        }))
    };

    render() {
        const {classes, user} = this.props;
        const postInput = {
            userId: user.id,
            content: this.state.postBody,
            contentJson: this.state.postBodyJSON !== '' ? JSON.stringify(this.state.postBodyJSON.toJSON()) : '',
            tags: this.state.tags,
        };
        const attachments = this.state.attachments.map((file:any, index:any) => (
            file.status === 'uploading' ? <CircularProgress key={index}/> :
            <div key={file.id} className={classes.attachment}>
                <Typography className={classes.attachmentText}>{file.name.length > 15 ? file.name.substring(0,15) + "..." : file.name}</Typography>
                <IconButton color="primary" style={{color: '#8b8b8b'}} onClick={this.handleDeleteAttachment(index)}>
                    <Clear/>
                </IconButton>
            </div>
        ));
        return (
            <div className={`card ${classes.postInput}`}>
                <div className={classes.inputHeader}>
                    <Avatar className={classes.avatar} src={user.avatar ? `${endpoint}/images/${user.id}/${user.avatar}` : "profile.jpeg"}/>
                    <div className={classes.inputHeaderText}>
                        <div className={classes.userInfo}>
                            <Typography className={classes.userName}>{user.name}</Typography>
                        </div>
                        <Typography className={classes.userLogin}>{`@${user.login}`}</Typography>
                    </div>
                </div>
                <PostTextEditor updateData={this.updateData} />
                <div style={{position: 'relative'}}>
                    {/* <textarea className={`input border-input ${classes.postTextarea}`}
                        name="postBody" id="postTextarea" value={this.state.postBody} onChange={this.handleChange}
                        placeholder="Write something..." style={{minHeight: 58, height: this.state.textareaHeight}} />

                    <textarea className={`input border-input ${classes.postTextarea}`}
                        name="postShadowBody" id="postShadowTextarea" value={this.state.postBody}
                        placeholder="Write something..." 
                        style={{overflow: 'hidden', position: 'absolute',
                            visibility: 'hidden', whiteSpace: 'pre-wrap'}}
                        rows={1} tabIndex={-1} /> */}
                </div>

                <div className={classes.inputFiles}>
                    {attachments}
                </div>

                <div className={classes.createPostBottom}>
                    <input className={classes.attachButton} id="image-file" type="file" accept="image/*" onChange={this.handleAttach}/>
                    <label htmlFor="image-file">
                        <IconButton disableRipple={true} color="primary" component="span" className={classes.iconButton}>
                            <InsertPhoto />
                        </IconButton>
                    </label>


                    <Mutation mutation={CREATE_POST} onCompleted={(data) => {
                        this.state.attachments.forEach((file:any) => {
                            this.props.client.mutate({
                                mutation: ADD_IMAGE,
                                variables: {postId: data.createPost.postId, imageId: file.id},
                                refetchQueries: [{query: SEARCH_POST_IN_PROFILE, variables: {userId: user.id, searchText: ""}}, {query: SEARCH_POST, variables: {searchText: ""}}]
                            });
                        });
                        this.setState({postBody: '', attachments: [], textareaHeight: 58})
                    }}
                        onError={(error) => console.log(error)}
                        update={(cache, {data: {createPost}}) => {
                            const data = cache.readQuery({
                                query: SEARCH_POST_IN_PROFILE,
                                variables: {userId: user.id, searchText: ""}
                            });
                            const posts = (data as any).searchPostInProfile.posts.concat(createPost);
                            cache.writeQuery({
                                query: SEARCH_POST_IN_PROFILE,
                                variables: {userId: user.id, searchText: ""},
                                data: {searchPostInProfile: {
                                        ...(data as any).searchPostInProfile,
                                        posts: posts,
                                }}
                            });
                        }}>
                        {createPost => {
                            return <Button className={`button fill-button ${classes.postButton}`} variant="raised"
                                color="primary"
                                onClick={() => {if (this.state.postBody || this.state.attachments.length)
                                    {
                                        createPost({ variables: { input: postInput } })
                                        console.log(postInput)
                                    } else {
                                        console.log(postInput)
                                    }
                                }}>Post</Button>
                        }}
                    </Mutation>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(withApollo(PostInput));