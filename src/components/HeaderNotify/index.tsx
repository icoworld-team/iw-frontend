import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ReplyIcon from '@material-ui/icons/Reply';
import CakeIcon from '@material-ui/icons/Cake';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MessageIcon from '@material-ui/icons/Message';
import { withStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
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
    marginRight: '10px',
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
    color: '#6c757d',
  },
  button: {
    fontSize: '11px',
    lineHeight: '13px',
    padding: 0,
    'text-transform': 'none',
    minWidth: '22px',
    minHeight: '20px',
    color: '#6c757d',
    marginRight: '5px',
  },
  icon: {
    fontSize: 11,
  },
  cakeIcon: {
    color: '#ff9800',
  },
  thumbUpIcon: {
    color: '#2196f3',
  },
  messageIcon: {
    color: '#9e9e9e',
  },
});

class HeaderNotify extends React.Component<any> {

  render() {
    const { classes } = this.props;

    const databaseNotify = [
      {
        id: 1,
        type: 'type1',
        avatar: 'profile.jpeg',
        time: '6:19 PM',
        body: `Stella Johnson has recently posted an album`
      },
      {
        id: 2,
        type: 'type2',
        avatar: 'profile.jpeg',
        time: '8:44 AM',
        body: `Alex Brown has shared Martin Guptil's post`
      },
      {
        id: 3,
        type: 'type3',
        avatar: 'profile.jpeg',
        time: '2:23 PM',
        body: `Domnic Brown has sent you a group invitation for Global Health`
      },
      {
        id: 4,
        type: 'type4',
        avatar: 'profile.jpeg',
        time: '5:55 AM',
        body: `John Smith has birthday today`
      }
    ];

    // let variantChange = (notificationType: any) => {
    //   // let icon;
    //   switch (notificationType) {
    //     case 'type1':
    //       <ThumbUpIcon />;
    //       break;
    //     case 'type2':
    //       <ReplyIcon />;
    //       break;
    //     case 'type3':
    //       <CakeIcon />;
    //       break;
    //     case 'type4':
    //       <MessageIcon />;
    //       break;
    //     default:
    //       <MessageIcon />;
    //       break;
    //   }
    // };

  const notifications = databaseNotify.map(function (notification) {
    return (
      <li className={classes.messagesItem}>
        <div className={classes.avatar}>
          <Avatar src={notification.avatar} />
        </div>

        <div className={classes.messageContent}>

          <Typography className={classes.messageText}>{notification.body}</Typography>

          <Button variant="flat" size="small" className={classes.button}>
            {
              notification.type === 'type1' ? <ThumbUpIcon className={`${classes.icon} ${classes.thumbUpIcon}`} />
              :
              notification.type === 'type2' ? <MessageIcon className={`${classes.icon} ${classes.messageIcon}`} />
              :
              notification.type === 'type3' ? <CakeIcon className={`${classes.icon} ${classes.cakeIcon}`} />
              : <ReplyIcon className={classes.icon} />
            }
          </Button>

          <div className={classes.messageTime}>
            <small>{notification.time}</small>
          </div>
          
        </div>
      </li>
    )
  });

    return (
      <>
        <ul className={classes.messagesList}>
          {notifications}
        </ul>
      </>
    );
  }
}

export default withStyles(styles)(HeaderNotify);
