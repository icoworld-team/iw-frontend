import React, {Component} from 'react'
import ChatContactsList from '../ChatContactsList'
import ChatWindow from '../ChatWindow'
import Comment from '@material-ui/icons/Comment';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    selectUserWindow: {
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '785px',
    },
    chatSideNav: {
        backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #e9ecef',
        minWidth: '315px',
    }
});

class Chat extends Component<any> {
    state = {
        selectedUser: this.props.location.state ? this.props.location.state.user : null,
    };

    onSelectUser = (user:any) => {
        this.setState({
            selectedUser: user
        });
    };

    render() {
        const { classes } = this.props;
        const selectUserWindow = (
            <div className={classes.selectUserWindow}>
                <Comment/>
                <h1>Select user to start chat</h1>
            </div>
        );
        return (
            <div className={`page-wrapper`}>
                <div className="page-content" style={{alignItems: 'stretch', height: 'calc(100vh - 108px)'}}>
                    <div className={classes.chatSideNav}>
                        <ChatContactsList onSelectUser={this.onSelectUser}/>
                    </div>
                    {this.state.selectedUser ? <ChatWindow user={this.state.selectedUser}/> : selectUserWindow}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Chat)
