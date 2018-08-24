import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'

import MainAppBar from '../MainAppBar';
import Author from '../Author';

import PostList from '../PostList';

const styles = () => createStyles({
  news: {
    minWidth: '1000px',
    marginTop: '20px',
    display: 'flex',
    marginBottom: '30px',
  },
  newsLeft: {
    marginRight: '20px',
  },
  newsRight: {
    width: '325px',
    minWidth: '325px',
    flex: 1,
  },
  newsTabs: {
    backgroundColor: '#fafafa',
    padding: '15px 30px',
  },
  tabsList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabContent: {
    backgroundColor: '#fafafa',
    padding: '15px 30px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: '#fafafa',
    padding: '15px 30px',
  },
  cardHeading: {
    borderBottom: '1px solid #000',
    textAlign: 'center',
  },
  cardTitle: {
    marginBottom: '5px',
    fontSize: '18px',
  },
  cardContent: {
    marginTop: '10px',
  },
  authorsList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  author: {
    marginTop: '7px',
  },
  tags: {
    marginTop: '20px',
  },
  tagList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'inline-flex',
    flexWrap: 'wrap',
  },
  tagItem: {
    marginRight: '10px',
  },
  language: {
    marginTop: '20px',
    backgroundColor: '#fafafa',
    padding: '15px 30px',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  languageTitle: {
    marginRight: '5px',
  },
  languageList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'inline-flex',
  },
  languageItem: {
    marginRight: '5px',
    '&:last-child': {
      marginRight: 0,
    },
    '&::after': {
      content: '","'
    },
  },
  languageAdd: {
    marginLeft: '5px',
    fill: '#4a86e8',
  },
});

class News extends Component<any> {
  state={
    tab: 0
  };

  handleChange =(event:any, value:any)=>{
    this.setState({
        tab: value
    });
  };
  
  render() {
    const { classes } = this.props;
    // const { post } = this.props;

    return (
      <>
        <MainAppBar/>

        <Grid container spacing={0}>
          <Grid item xs={1} />

          <Grid item xs={10}>
            <div className={classes.news}>
              
              <div className={classes.newsLeft}>
                <div className={classes.newsTabs}>
                  <div className={classes.tabsList}>
                    <Tabs
                      value={this.state.tab}
                      onChange={this.handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                    >
                      <Tab label="Subscribed" />
                      <Tab label="Popular" />
                      <Tab label="New" />
                    </Tabs>
                    <TextField placeholder='Search' name='search' type='search' />
                  </div>
                </div>

                <div className={classes.tabContent}>
                  {this.state.tab === 0 && <PostList />}
                  {this.state.tab === 1 && <PostList />}
                  {this.state.tab === 2 && <PostList />}
                </div>
              </div>

              <div className={classes.newsRight}>

                <div className={classes.card}>
                  <div className={classes.cardHeading}>
                    <Typography className={classes.cardTitle}>Popular authors</Typography>
                  </div>
                  <div className={classes.cardContent}>
                    <ul className={classes.authorsList}>
                      <li className={classes.author}><Author /></li>
                      <li className={classes.author}><Author /></li>
                      <li className={classes.author}><Author /></li>
                      <li className={classes.author}><Author /></li>
                      <li className={classes.author}><Author /></li>
                      <li className={classes.author}><Author /></li>
                    </ul>
                  </div>
                </div>

                <div className={`${classes.card} ${classes.tags}`}>
                  <div className={classes.cardHeading}>
                    <Typography className={classes.cardTitle}>Tags</Typography>
                  </div>
                  <div className={classes.cardContent}>
                    <ul className={classes.tagList}>
                      <li className={classes.tagItem}>#news</li>
                      <li className={classes.tagItem}>#blockchain</li>
                      <li className={classes.tagItem}>#investments</li>
                      <li className={classes.tagItem}>#projects</li>
                    </ul>
                  </div>
                </div>

                <div className={classes.language}>
                  <span className={classes.languageTitle}>Language:</span>
                  <ul className={classes.languageList}>
                    <li className={classes.languageItem}>English</li>
                    <li className={classes.languageItem}>Русский</li>
                  </ul>
                  <AddCircleOutline className={classes.languageAdd} />
                </div>

              </div>

            </div>
            </Grid>

            <Grid item xs={1} />
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(News);