import './App.scss';
import Message from "./Message";

const dz13 = 'Пункт 3 из ДЗ, проостой текст в константе';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
          <Message data={'Привет React'}/>
          <Message data={ dz13 }/>
      </header>
    </div>
  );
}

export default App;
