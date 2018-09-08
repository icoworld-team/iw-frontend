import React,{Component} from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import InsertPhoto from '@material-ui/icons/InsertPhoto'
import InsertDriveFile from '@material-ui/icons/InsertDriveFile'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const CREATE_POST = gql`
  mutation createPost($input: PostInput!) {
    createPost(input: $input){
        postId
        userId
        userName
        date
        content
        tags
    }
  }
`;

const SEARCH_POST = gql`
    query searchPost($input: PostSearchingParamsInput!) {
        searchPost(input: $input) {
            postId
            userId
            userName
            date
            content
            tags
        }
    }
`;

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
    state = {
      postBody: ''
    };

    handleChange = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { classes, authUserId } = this.props;
        const postInput = {
            userId: authUserId,
            content: this.state.postBody
        };
        return (
            <div className={classes.postInput}>
                {/* <TextField className={classes.textInput} fullWidth multiline rows="6"/> */}
                <textarea name="postBody" id="postTextarea" className={classes.postTextarea} rows={6}
                          value={this.state.postBody} onChange={this.handleChange}></textarea>
                <Mutation mutation={CREATE_POST} onCompleted={() => this.setState({postBody: ''})} onError={(error)=>console.log(error)}
                          update={(cache, {data: { createPost }}) => {
                              const data = cache.readQuery({query: SEARCH_POST, variables: {input: {userId: authUserId}}});
                              console.log(data);
                              const posts = (data as any).searchPost;
                              posts.push(createPost);
                              console.log(posts);
                              cache.writeQuery({query: SEARCH_POST, variables: {input: {userId: authUserId}}, data: {searchPost: posts}});
                          }}>
                    {createPost => {
                        return <Button variant="raised" color="primary" onClick={()=> createPost({variables: {input: postInput}})}>Post</Button>
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