import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import MainAppBar from '../MainAppBar';
import Author from '../Author';

import PostList from '../PostList';

const styles = (theme: Theme) => createStyles({
  news: {
    minWidth: '1000px',
    display: 'flex',
    maxWidth: '1100px',
    margin: '0 auto',
    marginTop: '20px',
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
    padding: '15px 50px',
  },
  tabsList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabsIndicator: {
    backgroundColor: '#3f51b5',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    '&:hover': {
      color: '#3f51b5',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#3f51b5',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#3f51b5',
    },
  },
  tabSelected: {},
  search: {
    width: '150px',
  },
  tabContent: {
    backgroundColor: '#fafafa',
    padding: '15px 50px',
    marginTop: '20px',
  },
  card: {
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
    backgroundColor: '#fafafa',
    padding: '15px 30px',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
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

const SEARCH_POST = gql`
    query searchPost($input: PostSearchingParamsInput!) {
        searchPost(input: $input) {
            postId
            userId
            userName
            date
            content
            tags
        }
    }
`;

class News extends Component<any> {
  state={
    tab: 0,
    searchText: ""
  };

  handleChange =(event:any, value:any) => {
    this.setState({
        tab: value
    });
  };

  handleSearch = (e:any) => {
    this.setState({
        searchText: e.target.value
    });
  };
  
  render() {
    const { classes } = this.props;
    const input = {
      searchText: this.state.searchText
    };

    return (
      <>
        <MainAppBar/>

        <Grid container spacing={0}>
          <Grid item xs={1} />

          <Grid item xs={10}>
            <div className={classes.news}>
              
              <div className={classes.newsLeft}>
                <div className={`card ${classes.newsTabs}`}>
                  <div className={classes.tabsList}>
                    <Tabs
                      value={this.state.tab}
                      onChange={this.handleChange}
                      classes={{ indicator: classes.tabsIndicator }}
                    >
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Subscribed"
                      />
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Popular"
                      />
                      <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="New"
                      />
                    </Tabs>
                    <TextField className={classes.search} placeholder='Search' name='searchText' type='search' value={this.state.searchText} onChange={this.handleSearch}/>
                  </div>
                </div>

                <div className={`card ${classes.tabContent}`}>
                  {this.state.tab === 0 &&
                  <Query query={SEARCH_POST} variables={{input: input}}>
                      {({ loading, error, data }) => {
                          if(loading) return <div>Loading</div>;
                          if(error) return `Error: ${error}`;
                          return (
                              <PostList posts={data.searchPost}/>
                          )
                      }}
                  </Query>}
                  {this.state.tab === 1 &&
                  <Query query={SEARCH_POST} variables={{input: {}}}>
                      {({ loading, error, data }) => {
                          if(loading) return <div>Loading</div>;
                          if(error) return `Error: ${error}`;
                          return (
                              <PostList posts={data.searchPost}/>
                          )
                      }}
                  </Query>}
                  {this.state.tab === 2 &&
                  <Query query={SEARCH_POST} variables={{input: {}}}>
                      {({ loading, error, data }) => {
                          if(loading) return <div>Loading</div>;
                          if(error) return `Error: ${error}`;
                          return (
                              <PostList posts={data.searchPost} authUserId={null}/>
                          )
                      }}
                  </Query>}
                </div>
              </div>

              <div className={classes.newsRight}>

                <div className={`card ${classes.card}`}>
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

                <div className={`card ${classes.card}`}>
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

                <div className={`card ${classes.language}`}>
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