import React from 'react'
import { chatTime } from '../../utils'
import {endpoint} from "../../api";
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    chatUser: {
        display: 'flex',
        backgroundColor: '#fafafa',
        padding: '16px',
        borderBottom: '1px solid #e9ecef',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#e4e7f6',
        }
    },
    chatUserAvatarMode: {
        position: 'relative',
    },
    chatAvatar: {
        borderRadius: '50%',
    },
    chatMainUserInfo: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    userInfoName: {
        fontSize: '15px',
    },
    lastMessageTime: {
        fontSize: '11px',
        color: '#adb5bd',
    },
    chatUserInfo: {
        flex: '0 0 66.666%',
    },
    lastMessageInfo: {
        fontSize: '13px',
        color: '#6c757d',
    },
    messagesBadgeBlock: {
        flex: '0 0 66.666%',
        textAlign: 'right',
        padding: '0 5px',
        maxWidth: '22px',
    },
    messagesBadge: {
        backgroundColor: '#3f51b5',
        color: '#ffffff',
        borderRadius: '50%',
        padding: '3px 8px',
        fontSize: '75%',
        display: 'inline-block',
        '&:empty': {
            display: 'none',
        },
    },
    chatUserAvatar: {
        padding: '0 5px',
        flex: '0 0 16.666%',
    }
});

function ChatUser({user, onSelectUser, classes}:any) {
        const lastMessage = user.lastMessage ? user.lastMessage: user.messages[0];
        return (
            <div className={classes.chatUser} onClick={() => onSelectUser(user)}>
                <div className={classes.chatUserAvatar}>
                    <div className={classes.chatUserAvatarMode}>
                        <img className={classes.chatAvatar} width="40px" src={user.parnter.avatar ? `${endpoint}/images/${user.parnter.id}/${user.parnter.avatar}` : "profile.jpeg"}/>
                        {/*<span className={`chat-status small ${user.status}`} />*/}
                    </div>
                </div>
                <div className={classes.chatUserInfo}>
                    <span className={classes.userInfoName}>{user.parnter.name}</span>
                    <div className={classes.lastMessageInfo}>{lastMessage.content.length > 25 ? lastMessage.content.substring(0,25) + "..." : lastMessage.content}</div>
                    <div className={classes.lastMessageTime}>{chatTime(lastMessage.date)}</div>
                </div>
                <div className={classes.messagesBadgeBlock}>
                    <div className={classes.messagesBadge}>{user.newMessages > 0 ? user.newMessages : null}</div>
                </div>
            </div>
        )
}

export default withStyles(styles)(ChatUser)
