import React from 'react';
import ReactDOM from 'react-dom';

import "typeface-bitter";
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<App />,
	document.getElementById('root'));

serviceWorker.unregister();
