import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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