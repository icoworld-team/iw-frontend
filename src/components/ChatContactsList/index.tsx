import React, { Component } from 'react'
import ChatUser from '../ChatUser'
import { connect } from "react-redux";
import Scrollbars from 'react-custom-scrollbars';
import {Query} from "react-apollo";
import {GET_USER} from "../../api/graphql";
import {endpoint} from "../../api";
import Search from '@material-ui/icons/Search';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    chatSideNavHeader: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
        padding: '25px 20px 12px',
    },
    chatMainUserBlock: {
        display: 'flex',
        marginBottom: '20px',
    },
    chatUserAvatar: {
        padding: '0 5px',
        flex: '0 0 16.666%',
    },
    chatUserAvatarMode: {
        position: 'relative',
    },
    chatAvatar: {
        borderRadius: '50%',
    },
    chatMainUserInfo: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    userInfoName: {
        fontSize: '15px',
    },
    lastMessageTime: {
        fontSize: '11px',
        color: '#adb5bd',
    },
    searchWrapper: {
        paddingTop: '10px',
    },
    searchBar: {
        position: 'relative',
    },
    searchForm: {
        width: '100%',
    },
    searchInput: {
        height: '42px',
        padding: '6px 16px 6px 42px',
        borderRadius: 0,
        fontSize: '14px',
        width: '100%',
    },
    searchIcon: {
        position: 'absolute',
        left: '10px',
        top: '0px',
        height: '49px',
        padding: 0,
        backgroundColor: 'transparent',
        color: '#868e96',
        width: '30px',
        border: '0 none',
        cursor: 'pointer',
        outline: '0 none',
    },
    contactsTab: {
        textAlign: 'center',
        color: '#303546',
        borderBottom: '2px solid #303546',
        padding: '6px 24px',
    }
});

class ChatContactsList extends Component<any> {
    state = {
        searchText: '',
    };

    handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { authUser, onSelectUser, contactsList, classes} = this.props;
        const filteredContacts = contactsList.filter((chat:any) => chat.parnter.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1);
        const contacts = filteredContacts.map((contact:any) => (
            <ChatUser key={contact.chatId} user={contact} onSelectUser={onSelectUser}/>
        ));
        return (
            <>
                <div className={classes.chatSideNavHeader}>
                    <Query query={GET_USER} variables={{ userId: authUser.id }}>
                        {({ loading, error, data }) => {
                            if (loading) return null;
                            if (error) return `Error: ${error}`;
                            const user = data.getUser;
                            return (
                                <div className={classes.chatMainUserBlock}>
                                    <div className={classes.chatUserAvatar}>
                                        <div className={classes.chatUserAvatarMode}>
                                            <img className={classes.chatAvatar} width="50px" src={user.avatar ? `${endpoint}/images/${user.id}/${user.avatar}` : "profile.jpeg"}/>
                                            {/*<span className="chat-status online" />*/}
                                        </div>
                                    </div>
                                    <div className={classes.chatMainUserInfo}>
                                        <span className={classes.userInfoName}>{user.name}</span>
                                        <div className={classes.lastMessageTime}>{'@' + user.login}</div>
                                    </div>
                                </div>
                            )
                        }}
                    </Query>
                    <div className={classes.searchWrapper}>
                        <div className={classes.searchBar}>
                            <div className={classes.searchForm}>
                                <input className={classes.searchInput} type="search" name="searchText" placeholder="Search" onChange={this.handleChange}/>
                                <button className={classes.searchIcon}><Search/></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.contactsTab}>
                    <span>Contacts</span>
                </div>
                <Scrollbars autoHide style={{ height: '100%' }}>
                    {contacts}
                </Scrollbars>
            </>
        )
    }
}

const mapStateToProps = ({auth, chat}:any) => {
    return {
        authUser: auth.authUser,
        contactsList: chat.contactsList,
    }
};

export default connect(mapStateToProps)(withStyles(styles)(ChatContactsList))
