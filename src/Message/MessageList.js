import React from "react";
import MessageItem from "./MessageItem";

function MessageList(props) {
    return (
        <>
            <ul style={ {margin: "10 0 0 0", padding: "0"}}>
                {props.message.map((el) => {
                    return <MessageItem
                                body={el.body}
                                user={el.author}
                                key={el.id}
                            />;
                })}
            </ul>
        </>
    );
}

export default MessageList;
