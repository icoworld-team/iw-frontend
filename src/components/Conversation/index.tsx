import React from 'react'
import Message from '../Message'

export default function Conversation ({conversationData, selectedUser}:any) {
    /*const conversationData =  [
                {
                    'type': 'sent',
                    'message': 'It is a long established fact',
                    'sentAt': '3:08:35 PM',
                }, {
                    'type': 'received',
                    'message': 'I must explain to you how all this mistaken idea of denouncing ',
                    'sentAt': '3:10:28 PM',
                }, {
                    'type': 'sent',
                    'message': 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested',
                    'sentAt': '3:11:25 PM',
                }, {
                    'type': 'received',
                    'message': 'There are many variations of passages of ',
                    'sentAt': '3:12:36 PM',
                }, {
                    'type': 'received',
                    'message': 'All the Lorem Ipsum generators on the',
                    'sentAt': '3:12:45 PM',
                }, {
                    'type': 'sent',
                    'message': 'There are many variations of passages of ',
                    'sentAt': '3:13:04 PM',
                }, {
                    'type': 'received',
                    'message': 'It is a long established fact',
                    'sentAt': '3:13:28 PM',
                }, {
                    'type': 'sent',
                    'message': 'The standard chunk of Lorem Ipsum used since the 1500s',
                    'sentAt': '3:15:45 PM',
                }
    ];*/
    
    const messages = conversationData.conversationData.map((message:any, index:any) => <Message key={index} message={message}/>);
    return (
        <div className="conversation">
            {messages}
        </div>
    )
}