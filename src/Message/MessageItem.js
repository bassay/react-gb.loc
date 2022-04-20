import React from "react";

function MessageItem(props) {
    // console.log(props)

    const styles ={
        li:{
            listStyle:'none',
        }
    }

    return (
        <li style={styles.li}>{props.body}</li>
    )
}


export default MessageItem