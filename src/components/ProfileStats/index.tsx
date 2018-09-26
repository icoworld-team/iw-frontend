import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { withStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
    profileStats: {
        padding: '10px',
    },
    statsLinks: {
        textDecoration: 'none',
        color: '#000',
        display: 'inline-block',
        margin: '10px',
    },
    statsLabel: {
        display: 'block',
        fontSize: '2em',
        marginBottom: '10px',
    }
});

class ProfileStats extends Component<any> {
    // (props: any, {stats}:any)
    render() {
        const { classes } = this.props;
        const { stats } = this.props;

        return (
            <div className={`card ${classes.profileStats}`}>
                <Link className={classes.statsLinks} to="#">
                    <span className={classes.statsLabel}>{stats.followers}</span>
                    <span>Followers</span>
                </Link>
                <Link className={classes.statsLinks} to="#">
                    <span className={classes.statsLabel}>{stats.follow}</span>
                    <span>Follow</span>
                </Link>
                <Link className={classes.statsLinks} to="#">
                    <span className={classes.statsLabel}>{stats.posts}</span>
                    <span>Posts</span>
                </Link>
            </div>
        )
    }
}

export default withStyles(styles)(ProfileStats);