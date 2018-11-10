import React, {Component} from 'react'
import ChatContactsList from '../ChatContactsList'
import './style.css'
import ChatWindow from '../ChatWindow'
import Comment from '@material-ui/icons/Comment';

export default class Chat extends Component<any> {
    state = {
        selectedUser: this.props.location.state ? this.props.location.state.user : null,
    };

    onSelectUser = (user:any) => {
        this.setState({
            selectedUser: user
        });
    };

    render() {
        const selectUserWindow = (
            <div className="select-user-window">
                <Comment/>
                <h1>Select user to start chat</h1>
            </div>
        );
        return (
            <div className={`page-wrapper`}>
                <div className="page-content" style={{alignItems: 'stretch', height: 'calc(100vh - 108px)'}}>
                    <div className="chat-sidenav">
                        <ChatContactsList onSelectUser={this.onSelectUser}/>
                    </div>
                    {this.state.selectedUser ? <ChatWindow user={this.state.selectedUser}/> : selectUserWindow}
                </div>
            </div>
        )
    }
}