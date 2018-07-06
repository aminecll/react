import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Test from './test';
import registerServiceWorker from './registerServiceWorker';

render(<Test />, document.getElementById('root'));
registerServiceWorker();
