import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    };

    return (
        isSentByCurrentUser
        ? (
            <div className="mes-messageContainer justifyEnd">
                <p className="mes-sentText pr-10">{trimmedName}</p>
                <div className="mes-messageBox backgroundOrange">
                    <p className="mes-messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        : (
            <div className="mes-messageContainer justifyStart">
                <div className="mes-messageBox backgroundLight">
                    <p className="mes-messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="mes-sentText pl-10">{user}</p>
            </div>
        )
    );
};

export default Message;