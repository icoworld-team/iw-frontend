import React from 'react'
import {connect} from "react-redux";
import { chatTime } from '../../utils'
import {endpoint} from "../../api";
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    messageCell: {
        display: 'flex',
        padding: '16px',
    },
    rowReverse: {
        flexDirection: 'row-reverse',
    },
    avatar: {
        alignSelf: 'flex-end',
    },
    message: {
        fontSize: '14px',
        wordWrap: 'break-word',
    },
    messageTime: {
        marginTop: '.5rem',
        color: '#6c757d',
        fontSize: '14px',
    },
    bubble: {
        padding: '8px 12px',
        backgroundColor: '#f8f9fa',
        borderRadius: '20px 20px 20px 0',
        position: 'relative',
        marginLeft: '16px',
        maxWidth: '600px',
    },
    sentMessage: {
        marginLeft: 0,
        marginRight: '16px',
        backgroundColor: '#e4e7f6',
        borderRadius: '20px 20px 0 20px',
    }
});

function Message({message, authUser, classes}:any) {
    return (
        <div className={`${classes.messageCell} ${message.author.id === authUser.id ? classes.rowReverse : ''}`}>
            <img className={classes.avatar} width="40px" height="40px" src={message.author.avatar ? `${endpoint}/images/${message.author.id}/${message.author.avatar}` : "profile.jpeg"}/>
            <div className={`${classes.bubble} ${message.author.id === authUser.id ? classes.sentMessage : ''}`}>
                <div className={classes.message}>{message.content}</div>
                <div className={classes.messageTime}>{chatTime(message.date)}</div>
            </div>
        </div>
    )
}

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

export default connect(mapStateToProps)(withStyles(styles)(Message))
