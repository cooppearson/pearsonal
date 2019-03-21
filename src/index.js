import React from 'react';
import ReactDOM from 'react-dom';

import "typeface-bitter";
import "typeface-pinyon-script";
import "react-medium-image-zoom";

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<App />,
	document.getElementById('root'));

serviceWorker.unregister();
