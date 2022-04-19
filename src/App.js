import './App.scss';
// import Message from "./Message";
import {useState} from "react";
import MessageList from "./Message/MessageList";

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
    const [value, setValue] = useState("");

    function handleClick(e){
        setValue(
            console.log('handleClick', e)
        )
    };

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <MessageList/>

                    <form onSubmit={handleClick}>
                        <input type="text"/>
                        <button>Отправить</button>
                    </form>



                </header>
            </div>
        </>
    )
}

export default App
