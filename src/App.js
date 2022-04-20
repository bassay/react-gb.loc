import './App.scss';
import React, {useEffect, useState} from "react";
import MessageList from "./Message/MessageList";
import AddMessage from "./Message/AddMessage";

// Добавить в компонент App поле стейта messageList. В нем хранить массив объектов - сообщений (объект должен содержать, как минимум, поля text и author). Начальное значение - пустой массив).
// Рендерить список сообщений через map.
//
// Добавить и стилизовать форму - поле для ввода текста и кнопка для отправки сообщения. При отправке сообщения обновление UI должно происходить за счет обновления стейта App.
//
// Добавить в App useEffect - на каждое отправленное пользователем сообщение должен отвечать робот (должно автоматически отправляться сообщение с фиксированным текстом) - для этого необходимо проверять автора последнего сообщения.
//
// Сделать задержку ответа робота - сообщение от него должно отправляться через некоторый промежуток времени после отправки сообщения пользователя (напр., 1.5 сек).

function App() {
    // const [count, setCount] = useState(0)
    // дефолтные сообщения
    const dataMessage = []
    // const [value, setValue] = useState("");
    const [message, setMessage] = useState(dataMessage)

    useEffect(
        () => {
            if (message.length !== 0) {
                console.log(message)
                // запара, думал добавлять к массиву новое сообщение!
                // все зациклилось!

                // думал вызавать бота через функцию addBotMessage()
                // addBotMessage();
            }
        }, [message]
    );

    function addBotMessage() {
        setTimeout(
            setMessage(
                message.concat(
                    [
                        {
                            id: Date.now(),
                            author: 'BOT',
                            body: "Фикс сообщение от бота"
                        }
                    ]
                )
            ), 1500)
    }


    function addMessage(body) {
        setMessage(
            message.concat(
                [
                    {
                        id: Date.now(),
                        author: 'ADMIN',
                        body: body
                    }
                ]
            )
        )
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Мини чат с ботом</h1>
                    {message.length ? <MessageList message={message}/> :
                        <span>Начните чат! Напишите свое первое сообщение</span>}
                    <AddMessage onCreate={addMessage}/>
                </header>
            </div>
        </>
    )


}

export default App
