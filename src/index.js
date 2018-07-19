import React from 'react';
import { render } from 'react-dom';

import './index.css';

import C from './C';
import registerServiceWorker from './registerServiceWorker';

render(<C />, document.getElementById('root'));
registerServiceWorker();
