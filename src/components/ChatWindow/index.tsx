import React, {Component} from 'react'
import Scrollbars from 'react-custom-scrollbars';
import Conversation from '../Conversation'
import {endpoint, socket} from "../../api";
import { withApollo } from 'react-apollo';
import {connect} from "react-redux";
import { setMessages, addOlderMessages, readMessages, updateContacts } from "../../actions";
import { GET_CHAT_MESSAGES } from '../../api/graphql'
import ChatInput from '../ChatInput'
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
    chatWindow: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
    },
    chatMainHeader: {
        display: 'flex',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e9ecef',
        padding: '16px',
        alignItems: 'center',
    },
    avatarBlock: {
        padding: '0 5px',
    },
    avatarMode: {
        position: 'relative',
    },
    avatar: {
        borderRadius: '50%',
    },
    contactName: {
        marginLeft: '.1rem',
        fontSize: '20px',
        fontWeight: 500,
    },
});

// const fetchMessages = async (client:any, chatId:any) => {
//     const result = await client.query({
//         query: GET_CHAT_MESSAGES,
//         variables: {input: {chatId: chatId, skip: 0}},
//         fetchPolicy: 'network-only'
//     });
//     const messages = result.data.getChatMessages.messages.slice().reverse();
//     const chatMessages = {
//         id: chatId,
//         messages: messages
//     };
//     return chatMessages;
// };

class ChatWindow extends Component<any> {

    scrollArea:any;
    // position:number;

    async componentDidMount() {
        // if(this.props.chatMessages[this.props.user.chatId] === undefined) {
        //     const result = await this.props.client.query({
        //         query: GET_CHAT_MESSAGES,
        //         variables: {input: {chatId: this.props.user.chatId, skip: 0}},
        //         fetchPolicy: 'network-only'
        //     });
        //     const messages = result.data.getChatMessages.messages.slice().reverse();
        //     const chatMessages = {
        //         id: this.props.user.chatId,
        //         messages: messages
        //     };
        //     this.props.setMessages(chatMessages);
        // }
        if (this.props.chatMessages[this.props.user.chatId].length < 20) {
            this.fetchMore()
        }

        this.readMessages();
        // if(this.props.chatMessages[this.props.user.chatId] !== undefined) {
        //     let unreadMessages:any = [];
        //     this.props.chatMessages[this.props.user.chatId].forEach((message:any) => {
        //         if (!message.read && message.author.id !== this.props.authUser.id) unreadMessages.push(message.id)
        //     });
        //     if (unreadMessages.length > 0) {
        //         socket.emit("readMessage", {
        //             messageIds: unreadMessages,
        //             partnerId: this.props.user.parnter.id
        //         });
        //         this.props.readMessages(this.props.user.chatId);
        //         this.props.updateContacts(this.props.authUser.id);
        //     }
        // }
        this.scrollArea.scrollToBottom();
    }

    componentDidUpdate(prevProps:any){
        // if(this.props.user.chatId !== prevProps.user.chatId && this.props.chatMessages[this.props.user.chatId] === undefined){
        //     fetchMessages(this.props.client, this.props.user.chatId)
        //         .then((chatMessages) => this.props.setMessages(chatMessages));
        // }

        if (this.props.chatMessages[this.props.user.chatId] !== undefined && this.props.chatMessages[this.props.user.chatId].length < 10) {
            this.fetchMore()
        }

        this.scrollArea.scrollToBottom();
        // this.scrollArea.scrollTop(this.scrollArea.getScrollHeight() - this.position);

        this.readMessages();

        // if(this.props.chatMessages[this.props.user.chatId] !== undefined) {
        //     let unreadMessages:any = [];
        //     this.props.chatMessages[this.props.user.chatId].forEach((message:any) => {
        //         if (!message.read && message.author.id !== this.props.authUser.id) unreadMessages.push(message.id)
        //     });
        //     if (unreadMessages.length > 0) {
        //         socket.emit("readMessage", {
        //             messageIds: unreadMessages,
        //             partnerId: this.props.user.parnter.id
        //         });
        //         this.props.readMessages(this.props.user.chatId);
        //         this.props.updateContacts(this.props.authUser.id);
        //     }
        // }
    }

    readMessages = () => {
        if(this.props.chatMessages[this.props.user.chatId] !== undefined) {
            let unreadMessages:any = [];
            this.props.chatMessages[this.props.user.chatId].forEach((message:any) => {
                if (!message.read && message.author.id !== this.props.authUser.id) unreadMessages.push(message.id)
            });
            if (unreadMessages.length > 0) {
                socket.emit("readMessage", {
                    messageIds: unreadMessages,
                    partnerId: this.props.user.parnter.id
                });
                this.props.readMessages(this.props.user.chatId);
                this.props.updateContacts(this.props.authUser.id);
            }
        }
    };

    fetchMore = async () => {
        const chatId = this.props.user.chatId;
        const chatMessages = this.props.chatMessages[chatId];
        if (chatMessages) {
            const result = await this.props.client.query({
                query: GET_CHAT_MESSAGES,
                variables: {input: {chatId: chatId, skip: chatMessages.length}},
                fetchPolicy: 'network-only'
            });
            if(result.data.getChatMessages.messages.length > 0){
                const messages = result.data.getChatMessages.messages.slice().reverse();
                const fetchedMessages = {
                    id: this.props.user.chatId,
                    messages: messages
                };
                this.props.addOlderMessages(fetchedMessages);
            }
            else { console.log("empty")}
        }
    };

    handleScroll = (values:any) => {
        const { top } = values;
        if(top == 0){
            this.fetchMore();
        }
    };

    // handleScrollStop = () => {
    //     this.position = this.scrollArea.getScrollTop();
    //     // this.setState({
    //     //     pos: this.scrollArea.getScrollTop()
    //     // });
    //     // const pos = this.scrollArea.getScrollTop();
    //     // const full = this.scrollArea.getScrollHeight();
    //     // console.log(pos);
    //     // this.scrollArea.scrollTop(full-pos);
    // };

    render() {
        const { user, chatMessages, classes } = this.props;
        const data = chatMessages[user.chatId];
        return (
            <div className={classes.chatWindow}>
                <div className={classes.chatMainHeader}>
                    <div className={classes.avatarBlock}>
                        <div className={classes.avatarMode}>
                            <img className={classes.avatar} width="60px" src={user.parnter.avatar ? `${endpoint}/images/${user.parnter.id}/${user.parnter.avatar}` : "profile.jpeg"}/>
                            {/*<span className="chat-status online" />*/}
                        </div>
                    </div>
                    <div className={classes.contactName}>{user.parnter.name}</div>
                </div>
                <Scrollbars ref={(ref)=>{ this.scrollArea = ref;}} autoHide style={{height: 650}} onScrollFrame={this.handleScroll}>
                    <Conversation messages={data} chatId={user.chatId} selectedUser={user}/>
                </Scrollbars>
                <ChatInput id={user.parnter.id}/>
            </div>
        )
    }
}

const mapStateToProps = ({chat, auth}:any) => {
    return {
        chatMessages: chat.chatMessages,
        authUser: auth.authUser,
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        setMessages: (messages:any) => dispatch(setMessages(messages)),
        addOlderMessages: (messages:any) => dispatch(addOlderMessages(messages)),
        readMessages: (chatId:any) => dispatch(readMessages(chatId)),
        updateContacts: (id:any) => dispatch(updateContacts(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withApollo(ChatWindow)))
