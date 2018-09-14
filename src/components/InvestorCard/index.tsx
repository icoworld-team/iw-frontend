import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { withStyles, createStyles } from '@material-ui/core/styles'

const styles = () => createStyles({
    card: {
        padding: '20px 20px 10px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    avatarBlock: {
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px',
    },
    avatar: {
      height: '85px',
      width: '85px',
    },
    nameText: {
        marginBottom: '3px',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
    },
    cardText: {
        fontSize: '14px',
        lineHeight: '16px',
        marginBottom: '5px',
    },
    cardBtns: {
        display: 'flex',
        flexDirection: 'column',
        width: '75px',
    },
    button: {
        padding: '0px',
        fontSize: '10px',
        textTransform: 'none',
        minHeight: '20px',
    },
    followButton: {
        marginBottom: '10px',
        backgroundColor: '#980000',
    },
    messageButton: {
        borderColor: '#980000',
        color: '#980000',
    },
});

function InvestorCard (props:any) {
    const {classes, data} = props;

    return (
        <div className={classes.card}>
            <div className={classes.userInfo}>
                <div className={classes.avatarBlock}>
                    <Avatar className={classes.avatar} src="profile.jpeg"/>
                </div>
                <Typography className={classes.nameText} variant="title" align="center">{data.name}</Typography>
                {/* <Typography className={classes.cardText} variant="caption" align="center">{data.login}</Typography> */}
                <Typography className={classes.cardText} variant="caption" align="center">@hardcode_login</Typography>
                <Typography className={classes.cardText} variant="caption" align="center">{data.countOfFollowers} Followers</Typography>
            </div>
            <div className={classes.cardBtns}>
                <Button variant="contained" color="secondary" size="small" className={`${classes.button} ${classes.followButton}`}>
                    Follow
                </Button>
                <Button variant="outlined" color="secondary" size="small" className={`${classes.button} ${classes.messageButton}`}>
                    Message
                </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(InvestorCard);
