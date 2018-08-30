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
  },
  icon: {
    fontSize: 11,
    marginRight: '5px',
    color: '#6c757d',
  },
});

class HeaderMessages extends React.Component<any> {

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.paperHeading}>Messages</div>
        <div className={classes.paperContent}>
          <ul className={classes.messagesList}>

            <li className={classes.messagesItem}>
              <div className={classes.avatar}>
                <Badge color="secondary" badgeContent={5} classes={{ badge: classes.badge }}>
                  <Avatar src="profile.jpeg" />
                </Badge>
              </div>

              <div className={classes.messageContent}>
                <div className={classes.messageInfo}>
                  <a className={classes.messageAuthor} href='javascript:void(0)'>Domnic Brown</a>
                  <div className={classes.messageTime}>
                    <small>6:19 PM</small>
                  </div>
                </div>

                <Typography className={classes.messageText}>There are many variations of passages of...</Typography>

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

            <li className={classes.messagesItem}>
              <div className={classes.avatar}>
                <Avatar src="profile.jpeg" />
              </div>

              <div className={classes.messageContent}>
                <div className={classes.messageInfo}>
                  <a className={classes.messageAuthor} href='javascript:void(0)'>Domnic Brown</a>
                  <div className={classes.messageTime}>
                    <small>6:19 PM</small>
                  </div>
                </div>

                <Typography className={classes.messageText}>There are many variations of passages of...</Typography>

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

            <li className={classes.messagesItem}>
              <div className={classes.avatar}>
                <Badge color="secondary" badgeContent={8} classes={{ badge: classes.badge }}>
                  <Avatar src="profile.jpeg" />
                </Badge>
              </div>

              <div className={classes.messageContent}>
                <div className={classes.messageInfo}>
                  <a className={classes.messageAuthor} href='javascript:void(0)'>Domnic Brown</a>
                  <div className={classes.messageTime}>
                    <small>6:19 PM</small>
                  </div>
                </div>

                <Typography className={classes.messageText}>There are many variations of passages of...</Typography>

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

          </ul>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(HeaderMessages);
