import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);



// *Развернуть новый проект с использованием create-react-app.
// *Создать компонент Message, отображающий переданный ему пропсом текст.
// * Изменить компонент App так, чтобы тот рендерил Message и передавал ему
// пропсом текст (константу).
// * Стилизовать компоненты через css (при желании можно использовать less
// или sass, однако для sass нужно дополнительно установить node-sass: документация CRA).
// *Установить расширение React Devtools.