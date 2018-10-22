import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { SEARCH_POST, GET_TOP_USERS, GET_FOLLOWS_POSTS, GET_NEWS } from '../../api/graphql'
import { Query } from 'react-apollo';
import { connect } from "react-redux";
import { relativeTime } from '../../utils'

import Author from '../Author';
import PostList from '../PostList';

const styles = (theme: Theme) => createStyles({
  newsOfProject: {
    marginRight: '15px',
    marginBottom: 0,
    width: '260px',
	},
	newsOfProjectList: {
		padding: '15px',
	},
	newsOfProjectItem: {
    borderBottom: '1px solid #edeef0',
    paddingBottom: '15px',
    marginBottom: '15px',
		'&:last-child': {
      borderBottom: 'none',
      paddingBottom: 0,
      marginBottom: 0,
    },
  },
  newsOfProjectDate: {
    fontSize: '14px',
    lineHeight: '19px',
    color: '#8b8b8b',
  },
  newsOfProjectText: {
    fontSize: '14px',
    lineHeight: '19px',
    color: '#171717',
  },
  
  newsContent: {
		width: '555px',
		maxWidth: '555px',
		marginRight: '15px',
	},
  newsTabsList: {
		padding: '0 15px',
		marginBottom: '5px',
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

  newsRight: {
    width: '255px',
  },
  popularInvestorsList: {
    padding: '15px',
  },
  popularInvestorsItem: {
    marginBottom: '10px',
    '&:last-child': {
      marginBottom: 0,
    },
  },

  tagList: {
    padding: '15px',
    display: 'inline-flex',
    flexWrap: 'wrap',
  },
  tagItem: {
    marginRight: '10px',
  },
  tagItemText: {
    color: '#4a86e8',
    cursor: 'pointer',
  },

  language: {
    backgroundColor: '#fafafa',
    padding: '15px 30px',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
  },
  languageContent: {
    padding: '15px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  languageList: {
    display: 'inline-flex',
    flexWrap: 'wrap',
  },
  languageItem: {
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '19px',
    '&::after': {
      content: '"x"',
      marginLeft: '4px',
      fontSize: '10px',
      cursor: 'pointer',
    },
  },
  addButton: {
    minWidth: '35px',
    minHeight: '20px',
    fontSize: '10px',
    fontWeight: 600,
  },

  noActivity: {
		padding: '10px'
	},
});


class News extends Component<any> {
  state={
    tab: 0,
    searchText: ""
  };

  updateData = (value: String) => {
    this.setState({ searchText: value })
  }

  handleChange =(event:any, value:any) => {
    this.setState({
        tab: value
    });
  };

  handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
        searchText: e.target.value
    });
  };

  tagSearch = (e: any) => {
    let elem = e.target.innerHTML
    this.setState({
      searchText: elem
    })
  }
  
  render() {
    const { classes } = this.props;
    const input = {
      searchText: this.state.searchText,
    };

    const id = {
      userId: this.props.authUser.id,
    };

    return (
      <>
        <Grid container spacing={0}>
          <Grid item xs={1} />

          <Grid item xs={10}>
            <div className={`page-content`}>

              <div className={`card ${classes.newsOfProject}`}>
                <div className={`card-heading`}>
                  <Typography className={`card-title`}>News of the icoWorld</Typography>
                </div>
                <ul className={classes.newsOfProjectList}>
                  <li>
                    <Query query={GET_NEWS}>
                      {({ loading, error, data }) => {
                        if(loading) return <div>Loading</div>;
                        if(error) return `Error: ${error}`;
                        return (
                          <>
                            {data.getNews.map((news:any) => (
                              <li key={news.id} className={classes.newsOfProjectItem}>
                                <Typography className={classes.newsOfProjectDate}>{relativeTime(news.date)}</Typography>
                                <Typography className={classes.newsOfProjectText}>{news.title}</Typography>
                              </li>
                            )).reverse()}
                          </>
                        )
                      }}
                    </Query>
                  </li>
                </ul>
              </div>

              <div className={classes.newsContent}>
                <div className={`card card-heading ${classes.newsTabsList}`}>
                  <Tabs
                      value={this.state.tab}
                      onChange={this.handleChange}
                      classes={{ indicator: `tabs-indicator`, root: `tabs-root` }}
                    >
                      <Tab
                        disableRipple
                        classes={{
                          root: `tab-root`,
                          label: `tab-label`,
                          labelContainer: `tab-label-container`
                        }}
                        label="Subscribed"
                      />
                      <Tab
                        disableRipple
                        classes={{
                          root: `tab-root`,
                          label: `tab-label`,
                          labelContainer: `tab-label-container`
                        }}
                        label="Popular"
                      />
                      <Tab
                        disableRipple
                        classes={{
                          root: `tab-root`,
                          label: `tab-label`,
                          labelContainer: `tab-label-container`
                        }}
                        label="New"
                      />
                    </Tabs>
                  <TextField InputProps={{ disableUnderline: true, classes: {input: `search-input input`} }} 
                    className={`heading-input`} name="searchText" placeholder="Search" value={this.state.searchText} onChange={this.handleSearch}/>
                </div>

                {this.state.tab === 0 &&
                <Query query={GET_FOLLOWS_POSTS} variables={id}>
                    {({ loading, error, data }) => {
                        if(loading) return <div>Loading</div>;
                        if(error) return `Error: ${error}`;
                        if(data.getFollowsPosts.length == 0) return <div className={`card ${classes.noActivity}`}><Typography>No posts</Typography></div>
                        return (
                            <PostList updateData={this.updateData} posts={data.getFollowsPosts}/>
                        )
                    }}
                </Query>}

                {this.state.tab === 1 &&
                <Query query={SEARCH_POST} variables={input}>
                    {({ loading, error, data }) => {
                        if(loading) return <div>Loading</div>;
                        if(error) return `Error: ${error}`;
                        if(data.searchPost.length == 0) return <div className={`card ${classes.noActivity}`}><Typography>No posts</Typography></div>
                        return (
                            <PostList updateData={this.updateData} posts={data.searchPost}/>
                        )
                    }}
                </Query>}
                
                {this.state.tab === 2 &&
                <Query query={SEARCH_POST} variables={input}>
                    {({ loading, error, data }) => {
                        if(loading) return <div>Loading</div>;
                        if(error) return `Error: ${error}`;
                        if(data.searchPost.length == 0) return <div className={`card ${classes.noActivity}`}><Typography>No posts</Typography></div>
                        return (
                            <PostList updateData={this.updateData} posts={data.searchPost} authUserId={null}/>
                        )
                    }}
                </Query>}

              </div>

              <div className={classes.newsRight}>

                <div className={`card`}>
                  <div className={`card-heading`}>
                    <Typography className={`card-title`}>Popular Investors</Typography>
                  </div>
                  <ul className={classes.popularInvestorsList}>
                    <Query query={GET_TOP_USERS} variables={{flag: true}}>
                        {({ loading, error, data }) => {
                            if(loading) return <div>Loading</div>;
                            if(error) return `Error: ${error}`;
                            return (
                              <>
                                {data.getTopUsers.map((user:any) => (
                                    <li key={user.id} className={classes.popularInvestorsItem}>
                                        <Author populars={user} />
                                    </li>
														    ))}
                              </>
                            )
                        }}
                    </Query>
                  </ul>
                </div>

                <div className={`card`}>
                  <div className={`card-heading`}>
                    <Typography className={`card-title`}>Tags</Typography>
                  </div>
                  <ul className={classes.tagList}>
                    <li className={classes.tagItem}><Typography onClick={this.tagSearch} className={classes.tagItemText}>#crypto</Typography></li>
                    <li className={classes.tagItem}><Typography onClick={this.tagSearch} className={classes.tagItemText}>#blockchain</Typography></li>
                    <li className={classes.tagItem}><Typography onClick={this.tagSearch} className={classes.tagItemText}>#tag</Typography></li>
                  </ul>
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

const mapStateToProps = ({auth}:any) => {
  return {
    authUser: auth.authUser,
    // tags: tagSearch.tags
  }
};

export default connect(mapStateToProps)(withStyles(styles)(News));