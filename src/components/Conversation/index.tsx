import React from 'react'
import Message from '../Message'

export default function Conversation ({chatId, selectedUser, messages}:any) {
    let data:any;
    if(messages) {
        data = messages.map((message:any, index:any) => <Message key={index} message={message}/>);
    }
    else {
        data=[];
    }
    return (
        <div className="conversation">
            {data}
        </div>
    )
}