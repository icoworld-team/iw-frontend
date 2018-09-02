import React from 'react';
import { Link } from "react-router-dom";
import { withStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const styles = () => createStyles({
  linkCard: {
    textDecoration: 'none',
  },
  card: {
    width: '170px',
    marginBottom: '10px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    paddingTop: '15px',
  },
  cardAvatar: {
    marginTop: '15px',
  },
  cardTether: {
    marginTop: '15px',
  }
});

function SimpleCard({ classes, pool }: any) {
    const date = new Date(pool.endDate).toLocaleDateString();

  return (
    <Link to={{pathname: "/pool-info", state: {id: pool.poolId}}} className={classes.linkCard}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>

          <Typography variant="subheading" align="center" component="h2">
              {`№${pool.poolName}`}
          </Typography>

          <Chip className={classes.cardAvatar}
            avatar={<Avatar src="/profile.jpeg" />}
            label={`${pool.ownerName}`}
          />

          <Typography className={classes.cardTether} component="p">
              {pool.projectName}
          </Typography>

          <Typography className={classes.cardDate} component="p">
              {date}
          </Typography>

          <Typography className={classes.cardComission} component="p">
            Total comiss 3%
          </Typography>

        </CardContent>

        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Link>
  );
}

export default withStyles(styles)(SimpleCard);