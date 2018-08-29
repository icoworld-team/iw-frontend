import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Scrollbars from 'react-custom-scrollbars';
import MainAppBar from '../MainAppBar'
import ChatContactsList from '../ChatContactsList'
import Conversation from '../Conversation'
import './style.css'

const data = [
    {
        'id': 1,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    },
    {
        'id': 2,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:03:28 PM',
            },
            {
                'type': 'received',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:05:47 PM',
            },
            {
                'type': 'sent',
                'message': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
                'sentAt': '3:07:52 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            },
        ]
    },
    {
        'id': 3,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'It is a long established fact',
                'sentAt': '3:08:35 PM',
            }, {
                'type': 'received',
                'message': 'I must explain to you how all this mistaken idea of denouncing ',
                'sentAt': '3:10:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            },
        ]
    },
    {
        'id': 4,
        'conversationData': [
            {
                'type': 'sent',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:03:28 PM',
            },
            {
                'type': 'received',
                'message': 'English versions from the 1914 translation by H. Rackham',
                'sentAt': '3:05:47 PM',
            },
            {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                'sentAt': '3:11:25 PM',
            }, {
                'type': 'received',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:12:36 PM',
            }, {
                'type': 'received',
                'message': 'All the Lorem Ipsum generators on the',
                'sentAt': '3:12:45 PM',
            }, {
                'type': 'sent',
                'message': 'There are many variations of passages of ',
                'sentAt': '3:13:04 PM',
            }, {
                'type': 'received',
                'message': 'It is a long established fact',
                'sentAt': '3:13:28 PM',
            }, {
                'type': 'sent',
                'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                'sentAt': '3:15:45 PM',
            }
        ]
    }
];

export default class Chat extends Component {
    state = {
        selectedUser: null,
        conversation: null,
        data: data
    };

     chatWindow = (user:any) => {
        return (
            <div className="chat-window">
                <div className="chat-main-header">
                    <div className="chat-window-user-avatar">
                        <div className="chat-user-avatar-mode">
                            <img className="post-avatar" width="60px" src="profile.jpeg"/>
                            <span className="chat-status online" />
                        </div>
                    </div>
                    <div className="chat-contact-name">{user.name}</div>
                </div>
                <Scrollbars autoHide style={{height: 650}}>
                <Conversation conversationData={this.state.conversation} selectedUser={this.state.selectedUser}/>
                </Scrollbars>
                <div className="chat-footer">
                    <div className="footer-row">
                        <div className="chat-form">
                            <textarea className="chat-textarea" placeholder="Type and hit enter to send message"/>
                        </div>
                        <div className="send-button">
                            <IconButton aria-label="Send message">
                                <i className="zmdi  zmdi-mail-send"/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onSelectUser = (user:any) => {
        this.setState({
            selectedUser: user,
            conversation: data.find((data)=> data.id == user.id)
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
            <div>
                <MainAppBar/>
                <Grid container spacing={0}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div className="chat-box">
                            <div className="chat-sidenav">
                                <ChatContactsList onSelectUser = {this.onSelectUser}/>
                            </div>
                            {this.state.selectedUser ? this.chatWindow(this.state.selectedUser) : selectUserWindow}
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        )
    }
}