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

function SimpleCard(props: any) {
  const { classes } = props;

  return (
    <Link to="/pool-info" className={classes.linkCard}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>

          <Typography variant="subheading" align="center" component="h2">
            №123-8/15/18
          </Typography>

          <Chip className={classes.cardAvatar}
            avatar={<Avatar src="/profile.jpeg" />}
            label="Ivan Fedotov"
          />

          <Typography className={classes.cardTether} component="p">
            Tether
          </Typography>

          <Typography className={classes.cardDate} component="p">
            25 December 2017
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