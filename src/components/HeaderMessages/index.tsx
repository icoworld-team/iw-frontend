import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ReplyIcon from '@material-ui/icons/Reply';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import { withStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  paperHeading: {
    padding: '15px 10px 15px 20px',
    borderBottom: '1px solid #dee2e6',
    fontSize: '17px',
    lineHeight: '20px',
    color: '#000',
  },
  paperContent: {
    padding: '5px 10px',
  },
  messagesList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  messagesItem: {
    padding: '15px 10px',
    display: 'flex',
    alignItems: 'flex-start',
    borderBottom: '1px solid #dee2e6',
    '&:last-child': {
      borderBottom: 'none',
    }
  },
  avatar: {
    width: '40px',
    height: '40px',
    marginRight: '15px',
  },
  badge: {
    left: '-5px',
    top: '-5px',
    width: '16px',
    height: '16px',
    fontSize: '10px',
    lineHeight: '16px',
  },
  messageContent: {
    flex: 1,
  },
  messageInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageAuthor: {
    fontSize: '13px',
    lineHeight: '18px',
    color: '#3f51b5',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  messageTime: {
    fontSize: '12px',
    lineHeight: '14px',
    color: '#6c757d',
    display: 'inline-block',
  },
  messageText: {
    fontSize: '11px',
    marginBottom: '6px',
    color: '#6c757d',
  },
  button: {
    fontSize: '11px',
    lineHeight: '13px',
    padding: 0,
    'text-transform': 'none',
    minWidth: '50px',
    minHeight: '23px',
    color: '#6c757d',
    marginRight: '5px',
  },
  icon: {
    fontSize: 11,
    color: '#6c757d',
  },
});

class HeaderMessages extends React.Component<any> {

  render() {
    const { classes } = this.props;

    const databaseMessages = [
      {
          id: 1,
          avatar: 'profile.jpeg',
          amountOfUnreadMessages: '3',
          author: 'Domnic Brown',
          authorLink: 'javascript:void(0)',
          time: '6:19 PM',
          body: `There are many variations of passages of...`
      },
      {
          id: 2,
          avatar: 'profile.jpeg',
          amountOfUnreadMessages: '0',
          author: 'Ivan Fedotov',
          authorLink: 'javascript:void(0)',
          time: '8:44 AM',
          body: `Lorem Ipsum is simply dummy text of the...`
      },
      {
          id: 3,
          avatar: 'profile.jpeg',
          amountOfUnreadMessages: '8',
          author: 'John Smith',
          authorLink: 'javascript:void(0)',
          time: '2:23 PM',
          body: `The point of using Lorem Ipsum is that it has a...`
      }
  ];

  const messages = databaseMessages.map(function (message) {
    return (
      <li key={message.id} className={classes.messagesItem}>
        <div className={classes.avatar}>
          {message.amountOfUnreadMessages >= '1' ?
            <Badge color="secondary" badgeContent={message.amountOfUnreadMessages} classes={{ badge: classes.badge }}>
              <Avatar src={message.avatar} />
            </Badge> :
            <Avatar src={message.avatar} />
          }
        </div>

        <div className={classes.messageContent}>
          <div className={classes.messageInfo}>
            <a className={classes.messageAuthor} href={message.authorLink}>{message.author}</a>
            <div className={classes.messageTime}>
              <small>{message.time}</small>
            </div>
          </div>

          <Typography className={classes.messageText}>{message.body}</Typography>

          <Button variant="flat" size="small" className={classes.button}>
            <ReplyIcon className={classes.icon} />
            Reply
          </Button>

          <Button variant="flat" size="small" className={classes.button}>
            <EyeIcon className={classes.icon} />
            Read
          </Button>
        
        </div>
      </li>
    )
  });

    return (
      <>
        <ul className={classes.messagesList}>
          {messages}
        </ul>
      </>
    );
  }
}

export default withStyles(styles)(HeaderMessages);
