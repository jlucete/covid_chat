import React, { Component } from 'react';
import reply from './icons/reply.png'
import './Chat1D.css';

class Chat1D extends Component {
  render() {
    const chatList = this.props.chatList;
    const chatHistory = chatList.map(
      (chat, i) => (
        <div key = {i} className="Chat1D-single" onClick={()=>(this.props.chatThreadHandleClick("o",i))}>
          <span className="Chat1D-single-writer">{chat.writer}</span>
          <span className="Chat1D-single-time">{chat.time}</span>
          <div className="Chat1D-single-chatValue">{chat.chatValue}
            <img className="Chat1D-single-reply" src={chat.chatThreadList.length===0? "" : reply}/>
            <span className="Chat1D-single-thread">{chat.chatThreadList.length===0? "" : " 답글 " + chat.chatThreadList.length + '개'}</span>
          </div>
        </div>
      )
    );
    return (
      <div className="Chat1D-layout">
        <div className="Chat1D-container">
          <div className="Chat1D-chatList">
            {chatHistory}
          </div>
          <div style={{ float:"left", clear:"both"}}
               ref={(el) => { this.props.scrollToBottom("o", el);}}>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat1D;