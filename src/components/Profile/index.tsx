import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import MainAppBar from '../MainAppBar';
import ProfileStats from '../ProfileStats';
import PortfolioList from '../PortfolioList';
import PortfolioAbout from '../PortfolioAbout';
import PostList from '../PostList';
import PostInput from '../PostInput';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from "react-redux";

const styles = (theme: Theme) => createStyles({
    profile: {
        display: 'flex',
        margin: '20px auto auto auto',
        justifyContent: 'center',
        maxWidth: '1100px',
    },
    profileInfo: {
        marginRight: '20px',
        textAlign: 'center',
        maxWidth: '240px',
    },
    profilePic: {
        padding: '20px',
    },
    profileName: {
        padding: '20px',
    },
    profileTabs: {
        padding: '0 50px 50px 50px',
    },
    avatar: {
        marginBottom: '10px',
        width: '100%',
    },
    actionButton: {
        width: '200px',
    },
    socialLinks: {
        display: 'block',
        padding: '20px',
    },
    socialLink: {
        textDecoration: 'none',
        margin: '4px',
    },
    userName: {
        fontWeight: 400,
    },
    tabsList: {
        borderBottom: '1px solid black',
    },
    socialIcon: {
        width: '25px',
        transition: '.3s',
        '&:hover': {
            transform: 'scale(1.2)',
        }
    }
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

class Profile extends Component<any> {
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
        // const samplePosts = [
        //     {
        //         postId: 1,
        //         userName: 'Ivan Fedotov',
        //         userLogin: '@iyufedotov',
        //         date: '01.09.2018',
        //         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro
        //             impedit minus corrupti repellendus architecto alias voluptates, voluptate, ipsam
        //             iste dolores sequi culpa et! Perferendis fuga tenetur labore nihil earum
        //             architecto quod ducimus ratione quo repellendus, temporibus cum enim similique
        //             nam facilis ipsa dignissimos. Temporibus tempora corporis vero ab harum?`
        //     },
        //     {
        //         postId: 2,
        //         userName: 'Ivan Fedotov',
        //         userLogin: '@iyufedotov',
        //         date: '01.09.2018',
        //         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora nisi
        //             necessitatibus distinctio iure, perspiciatis delectus pariatur ab velit exercitationem?`
        //     },
        //     {
        //         postId: 3,
        //         userName: 'Ivan Fedotov',
        //         userLogin: '@iyufedotov',
        //         date: '01.09.2018',
        //         content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ducimus
        //             magnam laborum possimus harum explicabo, placeat aliquid quod voluptatum mollitia
        //             dicta voluptates optio, consequuntur consectetur. Sed dolores quod enim ipsum,
        //             error fugiat officiis doloribus deleniti dolorum quidem mollitia dicta itaque
        //             culpa libero possimus minus modi perferendis fugit unde pariatur? Beatae
        //             consectetur aspernatur neque pariatur fugiat, esse cumque iusto tenetur magnam
        //             fuga obcaecati aut numquam officia quasi exercitationem rem minima architecto
        //             ad consequuntur sit totam optio! Laudantium suscipit, sequi illo optio ut ad,
        //             natus officia dolore minima culpa eaque! Reiciendis animi commodi mollitia
        //             voluptatibus cumque harum aut maxime optio, dolorem quae.`
        //     }
        // ];

        const input = {
          userId: this.props.authUser.id
        };
        console.log(this.props.authUser);
        console.log(this.props.authUser.id);



        return (
            <div>
                <MainAppBar/>

                <Grid container spacing={0}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <div className={classes.profile}>

                            <div className={classes.profileInfo}>
                                <div className={`card ${classes.profilePic}`} >
                                    <img className={classes.avatar} src="profile.jpeg" />
                                    <Button className={classes.actionButton} variant="outlined" color="primary">Edit</Button>
                                </div>
                                <div className={`card ${classes.profileName}`}>
                                    <h2 className={classes.userName}>Ivan Fedotov</h2>
                                    <small><p>@iyufedotov</p>
                                    <p>Russia, Kazan</p></small>
                                    <div className={classes.socialIcons}>
                                        <a className={classes.socialLink} href="#"><img className={classes.socialIcon} src='./icons/facebook.png'></img></a>
                                        <a className={classes.socialLink} href="#"><img className={classes.socialIcon} src='./icons/twitter.png'></img></a>
                                        <a className={classes.socialLink} href="#"><img className={classes.socialIcon} src='./icons/linkedIn.png'></img></a>
                                    </div>
                                </div>
                                <div>
                                    <ProfileStats stats={{followers: 150, follow: 10, posts: 73}}/>
                                </div>
                            </div>

                            <div className={`card ${classes.profileTabs}`}>
                                <div className={classes.tabsList}>
                                    <Tabs value={this.state.tab} onChange={this.handleChange} indicatorColor="primary" textColor="primary">
                                        <Tab label="Activity"/>
                                        <Tab label="Portfolio"/>
                                        <Tab label="About me"/>
                                    </Tabs>
                                </div>
                                {this.state.tab === 0 &&
                                    <>
                                        <PostInput authUserId={this.props.authUser.id}/>
                                        <Query query={SEARCH_POST} variables={{input: input}}>
                                            {({ loading, error, data }) => {
                                                if(loading) return <div>Loading</div>;
                                                if(error) return `Error: ${error}`;
                                                return (
                                                    <PostList posts={data.searchPost} authUserId={this.props.authUser.id}/>
                                                )
                                            }}
                                        </Query>
                                    </>
                                }
                                {this.state.tab === 1 && <PortfolioList/>}
                                {this.state.tab === 2 && <PortfolioAbout/>}
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

export default connect(mapStateToProps)(withStyles(styles)(Profile))