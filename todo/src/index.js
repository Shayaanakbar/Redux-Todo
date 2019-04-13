import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {todoReducer} from './Reducers/index';
import ToDoList from './Components/ToDoList';

import './index.css';
import * as serviceWorker from './serviceWorker';


const store = createStore(todoReducer);


function App() {
    return (
        <div className="App">
            < ToDoList/>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
