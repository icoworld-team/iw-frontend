import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './style.css'

const styles = (theme: Theme) => createStyles({
  root: {
    overflow: 'hidden',
    padding: `0 0`,
  },
  container: {
    borderBottom: '1px solid black',
    padding: `20px 0`,
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  list_item: {
    paddingBottom: '10px',
  },
  edit_btn: {
    fontStyle: 'italic',
  }
});

function PortfolioAbout(props: any) {
  const { classes } = props;
  const message = `A wonderful serenity has taken possession of
    my entire soul, like these sweet mornings of spring which I
    enjoy with my whole heart. I am alone, and feel the charm of
    existence was created for the bliss of souls like mine.I am
    so happy, my dear friend, so absorbed in the exquisite sense
    of mere tranquil existence, that I neglect my talents.
    A collection of textile samples lay spread out on the table -
    Samsa was a travelling salesman - and above it there hung a
    picture that he had recently cut out of an illustrated
    magazine and housed in a nice, gilded frame.`;

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container spacing={8}>
        <Grid item xs={2}>
          <Typography color='textSecondary'>About me:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography>{message}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.edit_btn} color='textSecondary'>edit</Typography>
        </Grid>
      </Grid>

      <Grid className={classes.container} container spacing={8}>
        <Grid item xs={2}>
          <Typography color='textSecondary'>Education:</Typography>
        </Grid>
        <Grid item xs={9}>
          <ul className="list">
            <li className="list__item">
              <Typography>Kazan Technological University</Typography>
              <Typography>2011-2015</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.edit_btn} color='textSecondary'>edit</Typography>
        </Grid>
      </Grid>

      <Grid className={classes.container} container spacing={8}>
        <Grid item xs={2}>
          <Typography color='textSecondary'>Experience:</Typography>
        </Grid>
        <Grid item xs={9}>
          <ul className="list">
            <li className="list_item">
              <Typography>Alpha-Bank, corporate department</Typography>
              <Typography>2015-2018</Typography>
            </li>
            <li className="list_item">
              <Typography>Alpha-Bank, corporate department</Typography>
              <Typography>2015-2018</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.edit_btn} color='textSecondary'>edit</Typography>
        </Grid>
      </Grid>

      <Grid className={classes.container} container spacing={8}>
        <Grid item xs={2}>
          <Typography color='textSecondary'>Language:</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography>Russian, English</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.edit_btn} color='textSecondary'>edit</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(PortfolioAbout);