import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles.scss';
// ReactDOM.render(<App />, document.getElementById('root'));

// redux tools
import { Provider } from "react-redux";
import store from "./reduxUtils/store";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

registerServiceWorker();
