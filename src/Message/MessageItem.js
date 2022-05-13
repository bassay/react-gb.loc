import React from "react";

function MessageItem(props) {
    const styles = {
        li: {
            listStyle: "none",
            textAlign: "left",
        },
    };
    return (
        <li style={styles.li}>
            {" "}
            <i>{props.user}: </i>
            {props.body}
        </li>
    );
}

export default MessageItem;
