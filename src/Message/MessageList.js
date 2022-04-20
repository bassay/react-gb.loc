import React from "react";
import MessageItem from "./MessageItem";

function MessageList(props) {
    return (
        <>
            <ul>
                {
                    props.message.map(el => {
                            return <MessageItem body={el.body} key={el.id}/>
                        }
                    )
                }
            </ul>
        </>
    )
}

export default MessageList