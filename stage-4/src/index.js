import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Route} from 'react-router-dom'

ReactDOM.render(
<Route>
    <Provider store={store}>
        <App />
    </Provider>
</Route>
    , document.getElementById('root'));
registerServiceWorker();
