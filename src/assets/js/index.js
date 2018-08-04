import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// import Estilos .css';
import '../sass/main.scss';

// import REDUX
import { createStore, applyMiddleware } from 'redux';
// HOC
import { Provider } from 'react-redux';
import reducer from './reducer';

import data from './API/products.json';
const initialState = {
  data: {
    ...data
  }
}
const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
const homeContainer = document.getElementById('main')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, homeContainer
);



const container = document.getElementById('header');
const holaMundo = <h1>Hola Mundo</h1>;

ReactDOM.render(<App data={data} />, container);

document.write("HOLA DESDE WEBPACK + Styled-Components (SASS)  + BABEL + Images + Fonts")
document.write("<br/> SERVER CON AUTO-RECARGADO YA FUNCIONA!, ReactDOM Listo!")

//import { firstMessage } from './message.js';
//document.write("<br/>", firstMessage)