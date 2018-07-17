import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { firstMessage } from './message.js';
import '../sass/main.scss';

const container = document.getElementById('main');
const holaMundo = <h1>Hola Mundo</h1>;

ReactDOM.render(holaMundo, container);
ReactDOM.render(<App />, container);

document.write("HOLA DESDE WEBPACK + SASS + BABEL + Images + Fonts")
document.write("<br/> SERVER CON AUTO-RECARGADO YA FUNCIONA!, ReactDOM no sirve")

document.write("<br/>", firstMessage)