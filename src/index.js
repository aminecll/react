import React from 'react';
import { render } from 'react-dom';
import './index.css';
import NewEvent from './NewEvent';
import registerServiceWorker from './registerServiceWorker';

render(<NewEvent />, document.getElementById('root'));
registerServiceWorker();
