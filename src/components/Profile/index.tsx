import React, { Component } from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Scrollbar from "react-custom-scrollbars";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import PostList from "../PostList";
import PostInput from "../PostInput";
import FollowButton from "../FollowButton";

import { Query } from "react-apollo";
import {
  SEARCH_POST_IN_PROFILE,
  GET_USER,
  GET_SUBSCRIBERS,
  GET_FOLLOWS
} from "../../api/graphql";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { endpoint } from "../../api";

const styles = (theme: Theme) =>
  createStyles({
    profile: {
      display: "flex",
      margin: "20px auto auto auto",
      justifyContent: "center",
      maxWidth: "1100px"
    },
    profileInfo: {
      marginRight: "15px",
      textAlign: "center",
      width: "260px",
      maxWidth: "260px",
      boxSizing: "border-box",
      padding: 0
    },
    profileInfoItem: {
      borderBottom: "1px solid rgba(193, 193, 193, 1)",
      padding: "15px",
      "&:first-child": {
        paddingTop: "20px",
        paddingLeft: "20px",
        paddingRight: "20px"
      },
      "&:last-child": {
        borderBottom: "none"
      }
    },
    userName: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#171717",
      lineHeight: "18px"
    },
    userInfoText: {
      fontSize: "14px",
      color: "#8b8b8b",
      marginTop: "5px",
      lineHeight: "16px"
    },
    avatar: {
      marginBottom: "10px",
      width: "110px",
      height: "110px"
    },
    itemTitle: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "16px",
      color: "#8b8b8b",
      marginBottom: "10px"
    },
    itemText: {
      textAlign: "left",
      fontSize: "14px",
      lineHeight: "16px",
      color: "#171717"
    },
    subItem: {
      marginBottom: "15px",
      "&:last-child": {
        marginBottom: 0
      }
    },

    profileContent: {
      width: "555px",
      maxWidth: "555px",
      marginRight: "15px"
    },

    profileTabsList: {
      padding: "0 15px",
      marginBottom: "5px"
    },

    followersCard: {
      marginBottom: "15px"
    },
    profileFollowers: {
      width: "255px"
    },
    followersList: {
      padding: "20px 15px 10px 15px",
      display: "flex",
      flexWrap: "wrap"
    },
    followersItem: {
      width: "60px",
      marginRight: "21px",
      "&:nth-child(3n)": {
        marginRight: 0
      },
      "&:nth-child(n+4)": {
        marginTop: "20px"
      },
      "&:nth-child(n+10)": {
        display: "none"
      }
    },
    followersItemModal: {
      width: "60px",
      marginRight: "21px",
      "&:nth-child(6n)": {
        marginRight: 0
      },
      "&:nth-child(n+7)": {
        marginTop: "20px"
      }
    },
    followerAvatar: {
      width: "55px",
      height: "55px",
      margin: "0 auto"
    },
    followerName: {
      marginTop: "5px",
      fontSize: "14px",
      lineHeight: "18px",
      color: "#171717",
      fontWeight: 600,
      display: "flex",
      flexDirection: "column",
      fontFamily: "Open Sans",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    followerEmptyText: {
      fontSize: "14px",
      color: "#171717",
      lineHeight: "18px",
      padding: "15px"
    },

    cardBtns: {
      display: "flex",
      marginTop: "10px"
    },
    followButton: {
      marginRight: "9px",
      minWidth: "85px",
      minHeight: "25px",
      fontWeight: 600,
      fontSize: "14px"
    },
    messageButton: {
      marginRight: "9px",
      minWidth: "85px",
      minHeight: "25px",
      fontWeight: 600,
      fontSize: "14px"
    },
    moreButton: {
      minWidth: "30px",
      minHeight: "25px"
    },
    moreButtonIcon: {
      fontSize: "23px"
    },
    editButton: {
      minWidth: "85px",
      minHeight: "25px",
      fontSize: "14px"
    },
    editCard: {
      display: "block",
      marginTop: "10px"
    },
    link: {
      textDecoration: "none"
    },
    noActivity: {
      textAlign: "center",
      padding: "10px"
    },

    noDisplay: {
      display: "none",
      cursor: "default"
    },

    hideComments: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      cursor: "pointer",
      transition: ".3s",
      "&:hover": {
        backgroundColor: "#efefef"
      }
    },
    hideCommentsText: {
      fontSize: "14px",
      lineHeight: "19px",
      color: "#8b8b8b"
    },

    paper: {
      width: "495px",
    },
  });

class Profile extends Component<any> {
  state = {
    tab: 0,
    searchText: "",
    hInput: "",
    tags: [],
    followsAmount: false,
    openFollowers: false,
    openFollows: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateData = (value: String) => {
    this.setState({ searchText: value });
  };

  resize = (value: String) => {
    // var size = 6

    let splitName = value.split(" ");
    // let sliceName = value;

    // if(splitName[0].length > size && splitName[1].length > size) {
    // 	sliceName = splitName[0].slice(0, 5) + '...' + ' ' + splitName[1].slice(0, 5) + '...'
    // 	return sliceName;
    // }
    // if(splitName[0].length > size) {
    // 	sliceName = splitName[0].slice(0, 5) + '...' + ' ' + splitName[1]
    // }
    // if(splitName[1].length > size) {
    // 	sliceName = splitName[0] + ' ' + splitName[1].slice(0, 5) + '...'
    // }
    return (
      <>
        <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
          {splitName[0]}
        </p>
        <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
          {splitName[1]}
        </p>
      </>
    );
  };

  handleChange = (event: any, value: any) => {
    this.setState({
      tab: value
    });
  };

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.target.value
    });
  };

  renderThumbVertical({ style, ...props }: any) {
    const customStyle = {
      backgroundColor: `rgb(152, 159, 168)`,
      borderRadius: "5px"
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }

  render() {
    const { classes } = this.props;

    let ownPage: boolean;
    let id: string;
    if (
      !this.props.location.state ||
      this.props.location.state.id == this.props.authUser.id
    ) {
      ownPage = true;
      id = this.props.authUser.id;
    } else {
      ownPage = false;
      id = this.props.location.state.id;
    }

    const input = {
      userId: id,
      searchText: this.state.searchText
    };

    return (
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className={`page-content`}>
              <Query query={GET_USER} variables={{ userId: id }} fetchPolicy="network-only">
                {({ loading, error, data }) => {
                  if (loading) return null;
                  if (error) return `Error: ${error}`;
                  const user = data.getUser;
                  return (
                      <>
                          <div className={`card ${classes.profileInfo}`}>
                              <ul className={classes.profileInfoList}>
                                  <li className={classes.profileInfoItem}>
                                      <img className={classes.avatar} src={user.avatar ? `${endpoint}/images/${user.id}/${user.avatar}` : "profile.jpeg"}/>
                                      <Typography className={classes.userName}>{user.name}</Typography>
                                      <Typography className={classes.userInfoText}>{user.login ? `@${user.login}` : null}</Typography>
                                      <Typography className={classes.userInfoText}>{user.city ? `${user.country}, ${user.city}` : user.country}</Typography>
                                      {ownPage ? (<div className={classes.editCard}>
                                              <Link to="/settings" className={classes.link}>
                                                  <Button variant="outlined" color="secondary" className={`button outline-button ${classes.editButton}`}>
                                                      Edit profile
                                                  </Button>
                                              </Link>
                                          </div>
                                      ) : (
                                          <div className={classes.cardBtns}>
                                              <Query query={GET_SUBSCRIBERS} variables={{ userId: user.id }}>
                                                  {({ loading, error, data }) => {
                                                      if (loading) return null;
                                                      if (error) return `Error: ${error}`;
                                                      return (
                                                          <FollowButton id={user.id} followers={data.getSubscribers} style={classes.followButton}/>
                                                      );
                                                  }}
                                              </Query>
                                              <Button variant="outlined" color="secondary" className={`button outline-button ${classes.messageButton}`}>
                                                  Message
                                              </Button>
                                              <Button variant="outlined" color="secondary" className={`button outline-button ${classes.moreButton}`}>
                                                  <MoreHorizIcon className={classes.moreButtonIcon}/>
                                              </Button>
                                          </div>
                                      )}
                                  </li>

                                  <li className={classes.profileInfoItem}>
                                      <Typography className={classes.itemTitle}  align="center">About:</Typography>
                                      <Typography className={`${classes.itemText} ${classes.aboutText}`}>{user.about}</Typography>
                                  </li>

                                  <li className={classes.profileInfoItem}>
                                      <Typography className={classes.itemTitle} align="center">Education:</Typography>
                                      <ul className={classes.subList}>
                                          {user.educations.map((education: any) => (
                                              <li key={education.id} className={classes.subItem}>
                                                  <Typography className={classes.itemText}>{education.name}</Typography>
                                                  <Typography className={classes.itemText}>{`${new Date(education.from).getFullYear()}-${new Date(education.to).getFullYear()}`}</Typography>
                                              </li>
                                          ))}
                                      </ul>
                                  </li>

                                  <li className={classes.profileInfoItem}>
                                      <Typography className={classes.itemTitle} align="center">Experience:</Typography>
                                      <ul className={classes.subList}>
                                          {user.jobs.map((job: any) => (
                                              <li key={job.id} className={classes.subItem}>
                                                  <Typography className={classes.itemText}>{job.name}</Typography>
                                                  <Typography className={classes.itemText}>{`${new Date(job.from).getFullYear()}-${new Date(job.to).getFullYear()}`}</Typography>
                                              </li>
                                          ))}
                                      </ul>
                                  </li>
                              </ul>
                          </div>
                          <div className={classes.profileContent}>
                              {ownPage ? (
                                  <PostInput authUserId={id} user={user} />
                              ) : null}
                              <div className={`card card-heading ${classes.profileTabsList}`}>
                                  <Tabs
                                      value={this.state.tab}
                                      onChange={this.handleChange}
                                      classes={{
                                          indicator: `tabs-indicator ${classes.noDisplay}`,
                                          root: `tabs-root`
                                      }}
                                  >
                                      <Tab
                                          style={{ cursor: "default" }}
                                          disableRipple
                                          classes={{
                                              root: `tab-root`,
                                              label: `tab-label`,
                                              labelContainer: `tab-label-container`
                                          }}
                                          label="Activity"
                                      />
                                  </Tabs>
                                  <TextField
                                      InputProps={{
                                          disableUnderline: true,
                                          classes: { input: `search-input input` }
                                      }}
                                      className={`heading-input`}
                                      name="searchText"
                                      placeholder="Search"
                                      value={this.state.searchText}
                                      onChange={this.handleSearch}
                                  />
                              </div>

                              <div className={`${classes.profileTabs}`}>
                                  {this.state.tab === 0 && (
                                          <Query query={SEARCH_POST_IN_PROFILE} variables={input}>
                                              {({ loading, error, data }) => {
                                                  if (loading) return <div>Loading</div>;
                                                  if (error) return `Error: ${error}`;
                                                  if (data.searchPostInProfile.posts.length == 0 && data.searchPostInProfile.reposts.length == 0)
                                                      return (
                                                          <div className={`card ${classes.noActivity}`}>
                                                              <Typography>No activity</Typography>
                                                          </div>
                                                      );

                                                  return <PostList updateData={this.updateData} posts={data.searchPostInProfile.posts.concat( data.searchPostInProfile.reposts)}/>
                                              }}
                                          </Query>
                                  )}
                              </div>
                          </div>
                      </>
                  );
                }}
              </Query>




            <div className={classes.profileFollowers}>
              <div className={`card ${classes.followersCard}`}>
                <div className={`card-heading`}>
                  <Typography className={`card-title`}>Followers</Typography>
                </div>

                <Query query={GET_SUBSCRIBERS} variables={{ userId: id }}>
                  {({ loading, error, data }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return `Error: ${error}`;

                    if (data.getSubscribers.length == 0)
                      return <Typography className={classes.followerEmptyText}>No followers</Typography>

                    const followers = data.getSubscribers.map((user: any) => (
                        <li className={classes.followersItem}>
                          <Link key={user.id} to={{pathname: "/profile", state: { id: user.id } }} className={classes.link}>
                            <Avatar className={classes.followerAvatar} src={user.avatar ? `${endpoint}/images/${user.id}/${user.avatar}` : "profile.jpeg"}/>
                            <Typography align="center" className={classes.followerName}>{this.resize(user.name)}</Typography>
                          </Link>
                        </li>
                    ));
                    return (
                      <>
                        <ul className={classes.followersList}>{followers}</ul>
                        <div
                          style={{
                            display: followers.length > 9 ? "" : "none"
                          }}
                          className={classes.hideComments}
                          onClick={() => {
                            this.setState({ openFollowers: true });
                          }}
                        >
                          <Typography className={classes.hideCommentsText}>See more</Typography>
                        </div>
                        <Dialog PaperProps={{square: true}} open={this.state.openFollowers} onClose={() => this.setState({ openFollowers: false })}>
                          <div className={classes.paper}>
                            <div className={`card-heading`} style={{ minHeight: "35px" }}>
                              <Typography className={`card-title`} style={{ fontFamily: "Open Sans" }}>Follows</Typography>
                            </div>
                            <Scrollbar autoHeight={true} autoHeightMax={590} renderThumbVertical={this.renderThumbVertical}>
                              <ul className={classes.followersList}>
                                {data.getSubscribers.map((user: any) => (
                                  <li className={classes.followersItemModal}>
                                    <Link key={user.id} to={{pathname: "/profile", state: { id: user.id }}} className={classes.link}>
                                      <Avatar className={classes.followerAvatar} src={user.avatar ? `${endpoint}/images/${user.id}/${user.avatar}` : "profile.jpeg"}/>
                                      <Typography align="center" className={classes.followerName}>{this.resize(user.name)}</Typography>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Scrollbar>
                          </div>
                        </Dialog>
                      </>
                    );
                  }}
                </Query>
              </div>

              <div className={`card ${classes.followersCard}`}>
                <div className={`card-heading`}>
                  <Typography className={`card-title`}>Follows</Typography>
                </div>
                <Query query={GET_FOLLOWS} variables={{ userId: id }}>
                  {({ loading, error, data }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return `Error: ${error}`;

                    if (data.getFollows.length == 0)
                      return <Typography className={classes.followerEmptyText}>No follows</Typography>

                    const follows = data.getFollows.map((user: any) => (
                      <li className={classes.followersItem}>
                        <Link key={user.id} to={{ pathname: "/profile", state: { id: user.id } }} className={classes.link}>
                          <Avatar className={classes.followerAvatar} src={user.avatar ? `${endpoint}/images/${user.id}/${user.avatar}` : "profile.jpeg"}/>
                          <Typography align="center" className={classes.followerName}>{this.resize(user.name)}</Typography>
                        </Link>
                      </li>
                    ));
                    return (
                      <>
                        <ul className={classes.followersList}>{follows}</ul>
                        <div
                          style={{ display: follows.length > 9 ? "" : "none" }}
                          className={classes.hideComments}
                          onClick={() => {
                            this.setState({ openFollows: true });
                          }}
                        >
                          <Typography className={classes.hideCommentsText}>See more</Typography>
                        </div>
                        <Dialog PaperProps={{square: true}} open={this.state.openFollows} onClose={() => this.setState({ openFollows: false })}>
                          <div className={classes.paper}>
                            <div className={`card-heading`} style={{ minHeight: "35px" }}>
                              <Typography className={`card-title`} style={{ fontFamily: "Open Sans" }}>Follows</Typography>
                            </div>
                            <Scrollbar autoHeight={true} autoHeightMax={590} renderThumbVertical={this.renderThumbVertical}>
                              <ul className={classes.followersList}>
                                {data.getFollows.map((user: any) => (
                                  <li className={classes.followersItemModal}>
                                    <Link key={user.id} to={{pathname: "/profile", state: { id: user.id }}} className={classes.link}>
                                      <Avatar className={classes.followerAvatar} src={user.avatar ? `${endpoint}/images/${user.id}/${user.avatar}` : "profile.jpeg"}/>
                                      <Typography align="center" className={classes.followerName}>{this.resize(user.name)}</Typography>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Scrollbar>
                          </div>
                        </Dialog>
                      </>
                    );
                  }}
                </Query>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    );
  }
}

const mapStateToProps = ({ auth }: any) => {
  return {
    authUser: auth.authUser
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));
