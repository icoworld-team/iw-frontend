import React, { Component } from 'react'
import MainAppBar from '../MainAppBar'
import { Switch } from "react-router";
import { Route, Redirect } from 'react-router-dom'
// import PrivateRoute from '../PrivateRoute'
import PoolCreate from "../PoolCreate";
import InvestorsPage from "../InvestorsPage";
import NewsPage from "../NewsPage";
import Profile from "../Profile";
import PoolSearch from "../PoolSearch";
import Chat from "../Chat";
import PoolInfo from "../PoolInfo";
import Settings from "../ProfileSettings";
import {socket} from "../../api";
import {addContact, addMessage, chatUnMount, setContacts, setInitialMsg} from "../../actions";
import {connect} from "react-redux";
import {GET_CHATS} from "../../api/graphql";
import {withApollo} from "react-apollo";

class MainApp extends Component<any> {

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
        this.props.setContacts(contacts);

        socket.open();
        socket.on("newChat", (data:any) => {
            console.log('newChat');
            console.log(data);
            const contact = {
                chatId: data.chatId,
                parnter: data.parnter,
                messages: [data.lastMessage]
            };
            this.props.addContact(contact);
        });

        socket.on("newMessage", (data:any) => {
            // const read = data.author.id === this.props.authUser.id;
            const message = {
                id: data.messageId,
                chatId: data.chatId,
                author: data.author,
                content: data.content,
                read: false,
                date: data.date
            };
            this.props.addMessage(message);
        });
    }

    componentWillUnmount(){
        socket.off("newChat");
        socket.off("newMessage");
        this.props.chatUnMount();
        socket.close();
    }

    render() {
        if(this.props.location.pathname === '/'){
            return (<Redirect to={{pathname: '/news'}}/>);
        }
        return (
            <div>
                <MainAppBar/>
                <Switch>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/pools" component={PoolSearch}/>
                    <Route exact path="/create-pool" component={PoolCreate}/>
                    <Route exact path="/pool-info" component={PoolInfo}/>
                    <Route exact path="/investors" component={InvestorsPage}/>
                    <Route exact path="/news" component={NewsPage}/>
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(MainApp))