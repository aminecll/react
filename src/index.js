import React from 'react';
import { render } from 'react-dom';
import './index.css';
import ProductWrapper from './ProductWrapper';
import registerServiceWorker from './registerServiceWorker';

render(<ProductWrapper />, document.getElementById('root'));
registerServiceWorker();
