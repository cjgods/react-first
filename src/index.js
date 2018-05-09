import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComIndex from './component/ComIndex';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComIndex />, document.getElementById('root'));
registerServiceWorker();
