import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MapsRenderer from './MapsRenderer.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<MapsRenderer />, document.getElementById('mapContainer'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
