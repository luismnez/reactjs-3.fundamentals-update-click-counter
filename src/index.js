import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let model = {
    clicks: 5
};

ReactDOM.render(<App clicks={model.clicks} onClick={() => { model.clicks += 1}}/>, document.getElementById('root'));
serviceWorker.unregister();
