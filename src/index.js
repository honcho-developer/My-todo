import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './/components/hock';
import * as serviceWorker from './serviceWorker';
import TodoRouter from './router/TodoRouter';
import Todo from './components/Todo';
ReactDOM.render(<TodoRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
