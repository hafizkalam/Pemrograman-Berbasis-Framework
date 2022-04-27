import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './Reducers/MainReducer'

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => 
f)(createStore)(MainReducer)
ReactDOM.render(<Provider store={store}>
<App />
</Provider>
,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/src/styles/styles.scss";
import "react-awesome-button/src/styles/themes/theme-c137";
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import MainReducer from './Reducers/MainReducer';
import CreateTodo from "./Containers/CreateTodo";
import Table from "./Containers/Table";

const store = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)(MainReducer);

  ReactDOM.render(
    <Provider store={store}>
      <CreateTodo />
      <Table />
    </Provider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> db7e801a7f9db56c2d8f2b82dffbe2286b6a8568
