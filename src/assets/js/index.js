import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

import App from './App';
import { firstMessage } from './message.js';
// import Estilos .css';
import '../sass/main.scss';

const store = createStore(
    reducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

import data from './API/products.json';

const container = document.getElementById('main');
const holaMundo = <h1>Hola Mundo</h1>;

//ReactDOM.render(holaMundo, container);

ReactDOM.render(<App data={data} />, container);

document.write("HOLA DESDE WEBPACK + Styled-Components (SASS)  + BABEL + Images + Fonts")
document.write("<br/> SERVER CON AUTO-RECARGADO YA FUNCIONA!, ReactDOM Listo!")

document.write("<br/>", firstMessage)