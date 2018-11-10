import React, { Component } from "react";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Post from "../Post";
import { Mutation, Query } from "react-apollo";
import { MAKE_TOP_USER, GET_INVESTORS, CREATE_NEWS } from "../../api/graphql";
import { connect } from "react-redux";


const styles = (theme: Theme) =>
  createStyles({
    editButton: {
      minWidth: "125px",
      minHeight: "25px",
      fontSize: "14px"
    },
    postTextarea: {
      width: '100%',
      resize: 'none',
      maxHeight: '418px',
  },
});

class Profile extends Component<any> {

  state = {
    postBody: '',
    textareaHeight: 58,
  }

  handleChange = (e: any) => {
    this.setState({
        [e.target.name]: e.target.value,
    });

    let postShadowTextarea: any = document.getElementById('postShadowTextarea');
    postShadowTextarea.value = e.target.value;
    let height = postShadowTextarea.scrollHeight;
    this.setState({
        textareaHeight: height + 20
    });
};

  render() {
    const { classes } = this.props;

    const input = {
      name: '',
      sortBy: "REGISTRATION_DATE",
    };

    return (
      <div className={`page-wrapper`}>
          <div className={`page-content`}>
            <ul>
              <Query query={GET_INVESTORS} variables={{input: input}}>
                  {({ loading, error, data }) => {
                      if(loading) return (
                          <div className="block-label">
                              <Typography variant="subheading" align='center'>Loading</Typography>
                          </div>
                      );
                      if(error) return `Error: ${error}`;
                      const investors = data.getInvestors.map((investor:any) => 
                        <li key={investor.id} style={{display: 'flex', marginBottom: '15px'}}>
                          <p style={{marginRight: '10px'}}>{investor.name}</p>
                          <Mutation mutation={MAKE_TOP_USER} onError={(error)=>console.log(error)}>
                            {makeTopUser => {
                              return (
                                <Button variant="outlined" color="secondary" className={`button outline-button ${classes.editButton}`}
                                  onClick={() => makeTopUser({variables: {userId: investor.id, flag: true}})}>
                                  Make Top User
                                </Button>
                              )
                            }}
                          </Mutation>
                        </li>
                      );
                      return investors.length ? investors : <Typography style={{padding: '15px'}} variant="subheading" align='center'>Not results</Typography>
                  }}
              </Query>
            </ul>
            <div style={{position: 'relative'}}>
              <textarea className={`input border-input ${classes.postTextarea}`}
                  name="postBody" id="postTextarea" value={this.state.postBody} onChange={this.handleChange}
                  placeholder="Write something..." style={{minHeight: 58, height: this.state.textareaHeight}} />

              <textarea className={`input border-input ${classes.postTextarea}`}
                  name="postShadowBody" id="postShadowTextarea" value={this.state.postBody}
                  placeholder="Write something..." 
                  style={{
                      overflow: 'hidden',
                      position: 'absolute',
                      visibility: 'hidden',
                      whiteSpace: 'pre-wrap'}} rows={1} tabIndex={-1} />
            <Mutation mutation={CREATE_NEWS} onError={(error)=>console.log(error)} onCompleted={() => this.setState({postBody: ''})}>
              {createNews => {
                return (
                  <Button variant="outlined" color="secondary" className={`button outline-button ${classes.editButton}`}
                    onClick={() => createNews({variables: {title: this.state.postBody}})}>
                    Create News
                  </Button>
                )
              }}
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }: any) => {
  return {
    authUser: auth.authUser
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));
