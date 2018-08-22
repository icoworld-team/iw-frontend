import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    card: {
        backgroundColor: '#fafafa',
        alignContent: 'center',
        padding: '30px 30px 0 30px'
    },
    avatarBlock: {
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
      height: '60px',
      width: '60px'
    },
    text: {
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    nameText: {
        marginTop: '8px',
        fontWeight: 400
    },
    loginText: {
        marginBottom: '25px'
    }
};

function InvestorCard (props:any) {
    const {classes, data} = props;

    return (
        <div className={classes.card}>
            <div className={classes.avatarBlock}>
                <Avatar className={classes.avatar} src="profile.jpeg"/>
            </div>
            <Typography className={classes.nameText} variant="title" align="center">{data.name}</Typography>
            <Typography className={classes.loginText} variant="caption" align="center">{data.login}</Typography>
            <Divider/>
            <Typography className={classes.text} variant="body1" align="center">{data.followers} Followers</Typography>
        </div>
    )
}

export default withStyles(styles)(InvestorCard);
