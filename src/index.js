import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MapsRenderer from './MapsRenderer.js';

ReactDOM.render(<MapsRenderer />, document.getElementById('div2'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
