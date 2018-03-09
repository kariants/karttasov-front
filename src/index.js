import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MapsRenderer from './MapsRenderer.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './SearchBar.js';

ReactDOM.render(<MapsRenderer />, document.getElementById('mapContainer'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SearchBar />, document.getElementById('searchBar'));

registerServiceWorker();
