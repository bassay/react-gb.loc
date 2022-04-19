import React from "react";

function BotMessage(message) {
    message.concat(
        [
            {
                id: Date.now(),
                author: 'BOT',
                body: 'HI i\'am bot'
            }
        ]
    )
}

export default BotMessage