import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import ChatContactsList from '../ChatContactsList'
import './style.css'
import ChatWindow from '../ChatWindow'

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
                <i className="zmdi zmdi-comment s-128 text-muted"/>
                <h1>Select user to start chat</h1>
            </div>
        );
        return (
                <Grid container spacing={0} style={{overflowX: 'hidden'}}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div className="page-content" style={{alignItems: 'stretch', height: 'calc(100vh - 108px)'}}>
                            <div className="chat-sidenav">
                                <ChatContactsList onSelectUser={this.onSelectUser}/>
                            </div>
                            {this.state.selectedUser ? <ChatWindow user={this.state.selectedUser}/> : selectUserWindow}
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
        )
    }
}