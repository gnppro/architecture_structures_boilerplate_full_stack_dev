import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

// import './index.css';
import App from './App';
import { firstMessage } from './message.js';
import '../sass/main.scss';

const store = createStore(
    reducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const container = document.getElementById('main');
const holaMundo = <h1>Hola Mundo</h1>;

ReactDOM.render(holaMundo, container);
ReactDOM.render(<App />, container);

document.write("HOLA DESDE WEBPACK + SASS + BABEL + Images + Fonts")
document.write("<br/> SERVER CON AUTO-RECARGADO YA FUNCIONA!, ReactDOM Listo!")

document.write("<br/>", firstMessage)