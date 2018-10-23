import React,{Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import Clear from '@material-ui/icons/Clear';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import { Mutation } from 'react-apollo';
import {ADD_IMAGE, CREATE_POST, SEARCH_POST, SEARCH_POST_IN_PROFILE, UPLOAD_FILE} from '../../api/graphql';
import { withApollo } from "react-apollo"

const styles = () => createStyles({
    postInput: {
        marginBottom: '15px',
        padding: '20px 15px 10px 15px',
    },
    postTextarea: {
        width: '100%',
        resize: 'none',
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
    },
    inputFiles: {
        display: 'flex',
        alignItems: 'center'
    }
});


class PostInput extends Component<any> {
    state = {
        postBody: '',
        tags: [],
        attachments: [],
        textareaHeight: 58,
    };

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
        if(validity.valid) {
            this.props.client.mutate({
                mutation: UPLOAD_FILE,
                variables: {file: file}
            }).then((response:any) => {
                this.setState((state:any) => ({
                    attachments: state.attachments.concat({id: response.data.uploadFile, name: file.name})
                }));
            })
        }
    };

    handleDeleteAttachment = (index:number) => () => {
        this.setState((state:any) => ({
            attachments: [...state.attachments.slice(0,index), ...state.attachments.slice(index+1)]
        }))
    };

    render() {
        const {classes, authUserId} = this.props;
        const postInput = {
            userId: authUserId,
            content: this.state.postBody,
            tags: this.state.tags,
        };
        const attachments = this.state.attachments.map((file:any, index:any) => (
            <div key={file.id} className={classes.inputFiles}>
                <Typography>{`${file.name} uploaded`}</Typography>
                <IconButton color="primary" component="span" style={{color: '#8b8b8b'}} onClick={this.handleDeleteAttachment(index)}>
                    <Clear/>
                </IconButton>
            </div>
        ));
        return (
            <div className={`card ${classes.postInput}`}>
                <div className={classes.inputHeader}>
                    <Avatar className={classes.avatar} src="profile.jpeg"/>
                    <div className={classes.inputHeaderText}>
                        <div className={classes.userInfo}>
                            <Typography className={classes.userName}>{this.props.authUser.name}</Typography>
                        </div>
                        <Typography className={classes.userLogin}>{`@${this.props.authUser.name}`}</Typography>
                    </div>
                </div>
                
                <div style={{position: 'relative'}}>
                    <textarea className={`input border-input ${classes.postTextarea}`}
                        name="postBody" id="postTextarea" value={this.state.postBody} onChange={this.handleChange}
                        placeholder="Write something..." style={{minHeight: 58, height: this.state.textareaHeight}} />

                    <textarea className={`input border-input ${classes.postTextarea}`}
                        name="postShadowBody" id="postShadowTextarea" value={this.state.postBody}
                        placeholder="Write something..." 
                        style={{
                            overflow: 'hidden',
                            position: 'absolute',
                            visibility: 'hidden',
                            whiteSpace: 'pre-wrap'}} rows={1} tabIndex={-1} />
                </div>

                <Mutation mutation={CREATE_POST} onCompleted={(data) => {
                    this.state.attachments.forEach((file:any) => {
                        console.log(123123);
                        this.props.client.mutate({
                            mutation: ADD_IMAGE,
                            variables: {postId: data.createPost.postId, imageId: file.id},
                            refetchQueries: [{query: SEARCH_POST_IN_PROFILE, variables: {userId: authUserId, searchText: ""}}, {query: SEARCH_POST, variables: {searchText: ""}}]
                        });
                    });
                    this.setState({postBody: '', attachments: []})
                }}
                    onError={(error) => console.log(error)}
                    update={(cache, {data: {createPost}}) => {
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
                <input className={classes.attachment} id="image-file" type="file" accept="image/*" onChange={this.handleAttach}/>
                <label htmlFor="image-file">
                    <IconButton color="primary" component="span" style={{color: '#8b8b8b'}}>
                        <InsertPhoto/>
                    </IconButton>
                </label>
                <input className={classes.attachment} id="file" type="file"/>
                <label htmlFor="file">
                    <IconButton color="primary" component="span" style={{color: '#8b8b8b'}}>
                        <InsertDriveFile/>
                    </IconButton>
                </label>
                {attachments}
            </div>
        )
    }
}

export default withStyles(styles)(withApollo(PostInput));