import React from 'react';
import { Link } from "react-router-dom";
import { withStyles, createStyles } from '@material-ui/core/styles';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Chip from '@material-ui/core/Chip';
// import Avatar from '@material-ui/core/Avatar';

const width = (100 / 130) * 100;

const styles = () => createStyles({
  poolCard: {
		padding: '15px',
	},
  poolName: {
		color: '#171717',
		fontSize: '14px',
	},
  poolSubName: {
		color: '#171717',
		fontSize: '16px',
		fontWeight: 600,
	},
  poolDate: {
		color: '#8b8b8b',
		fontSize: '12px',
	},
  poolProgress: {
		marginTop: '15px',
	},
  poolProgressLine: {
		height: '15px',
		width: '100%',
		border: '1px solid #980000',
		borderRadius: '3px',
		marginBottom: '5px',
		position: 'relative',
		overflow: 'hidden',
	},
	poolProgressLineComplete: {
		position: 'absolute',
		height: '100%',
		backgroundColor: '#980000',
	},
  poolProgressMoney: {
		color: '#8b8b8b',
		fontSize: '12px',
	},
  linkCard: {
    textDecoration: 'none',
  },
});

function SimpleCard({ classes, pool }: any) {
    const date = new Date(pool.endDate).toLocaleDateString();

  return (
    <Link to={{pathname: "/pool-info", state: {id: pool.poolId}}} className={classes.linkCard}>
      <div className={classes.poolCard}>
        {/* <Chip className={classes.cardAvatar}
          avatar={<Avatar src="/profile.jpeg" />}
          label={`${pool.ownerName}`}
        /> */}
        <Typography className={classes.poolName}>{`№${pool.poolName}`}</Typography>
        {/* <Typography className={classes.poolSubName}>Tether</Typography> */}
        <Typography className={classes.poolSubName}>{pool.projectName}</Typography>
        <Typography className={classes.poolDate}>{date}</Typography>

        <div className={classes.poolProgress}>
          <div className={classes.poolProgressLine}>
            <div className={classes.poolProgressLineComplete} style={{width: `${width}%`}}></div>
          </div>
          <Typography className={classes.poolProgressMoney}>100 ETH  from 130 ETH</Typography>
        </div>
      </div>
    </Link>
  );
}

export default withStyles(styles)(SimpleCard);