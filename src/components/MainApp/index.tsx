import React, { Component } from 'react'
import MainAppBar from '../MainAppBar'
import { Switch } from "react-router";
import { Route, Redirect } from 'react-router-dom'
// import PrivateRoute from '../PrivateRoute'
import PoolCreate from "../PoolCreate";
import InvestorsPage from "../InvestorsPage";
import NewsPage from "../NewsPage";
import Profile from "../Profile";
// import PoolSearch from "../PoolSearch";
import ProjectsPage from "../ProjectsPage";
import Chat from "../Chat";
import PoolInfo from "../PoolInfo";
import Settings from "../ProfileSettings";
import {socket} from "../../api";
import {addContact, addMessage, chatUnMount, logOut, setContacts, setInitialMsg, updateContacts} from "../../actions";
import {connect} from "react-redux";
import {GET_CHATS} from "../../api/graphql";
import {withApollo} from "react-apollo";

class MainApp extends Component<any> {

    state = {
        tab: 0
    }

    async componentDidMount(){
        const result = await this.props.client.query({
            query: GET_CHATS,
            variables: {userId: this.props.authUser.id},
            fetchPolicy: 'network-only'
        });
        const contacts = result.data.getChats.slice().reverse();

        let chatMessages = {};
        contacts.forEach((chat:any) => {
            chatMessages = {
                ...chatMessages,
                [chat.chatId]: chat.messages
            }
        });
        this.props.setInitialMsg(chatMessages);
        this.props.setContacts({contacts: contacts, id: this.props.authUser.id});


        socket.open();
        socket.on("newChat", (data:any) => {
            const contact = {
                chatId: data.chatId,
                parnter: data.parnter,
                messages: data.messages
            };
            this.props.addContact(contact);
            this.props.updateContacts(this.props.authUser.id);
        });

        socket.on("newMessage", (data:any) => {
            const message = {
                id: data.messageId,
                chatId: data.chatId,
                author: data.author,
                content: data.content,
                read: data.read,
                date: data.date
            };
            this.props.addMessage(message);
            this.props.updateContacts(this.props.authUser.id);
        });

        socket.on("notAuthenticated", () => {
            this.props.logOut();
        });

        this.tabSwitch(this.props.location.pathname)
    }

    componentWillUnmount(){
        socket.off("newChat");
        socket.off("newMessage");
        socket.off("notAuthenticated");
        this.props.chatUnMount();
        socket.close();
    }

    componentWillReceiveProps(nextProps: any) {
        this.tabSwitch(nextProps.location.pathname)
    }

    tabSwitch(pathname: any) {
        switch (pathname) {
            case '/feed':
                this.setState({tab: 0});
                break;
            case '/profile':
                this.setState({tab: 1});
                break;
            case '/messages':
                this.setState({tab: 2});
                break;
            case '/investors':
                this.setState({tab: 3});
                break;
            case '/projects':
                this.setState({tab: 4});
                break;
            // case '/pools':
            //     this.setState({tab: 5});
            //     break;
            default:
                this.setState({tab: -1});
                break;
            }
    }

    render() {
        if(this.props.location.pathname === '/'){
            return (<Redirect to={{pathname: '/feed'}}/>);
        }
        return (
            <div>
                <MainAppBar tab={this.state.tab}/>
                <Switch>
                    <Route path="/profile" component={Profile}/>
                    {/* <Route path="/pools" component={PoolSearch}/> */}
                    <Route path="/projects" component={ProjectsPage}/>
                    <Route exact path="/create-pool" component={PoolCreate}/>
                    <Route exact path="/pool-info" component={PoolInfo}/>
                    <Route exact path="/investors" component={InvestorsPage}/>
                    <Route exact path="/feed" component={NewsPage}/>
                    <Route exact path="/messages" component={Chat}/>
                    <Route exact path="/settings" component={Settings}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({auth, chat}:any) => {
    return {
        authUser: auth.authUser,
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        addContact: (contact:any) => dispatch(addContact(contact)),
        addMessage: (message:any) => dispatch(addMessage(message)),
        chatUnMount: () => dispatch(chatUnMount()),
        setContacts: (contacts:any) => dispatch(setContacts(contacts)),
        setInitialMsg: (messages:any) => dispatch(setInitialMsg(messages)),
        updateContacts: (id:any) => dispatch(updateContacts(id)),
        logOut: () => dispatch(logOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(MainApp))