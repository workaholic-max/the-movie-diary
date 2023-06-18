import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './js/components/templates/App';

import './styles/index.scss';

// TODO: create authRoute
// TODO: application must support importing modules using absolute paths! (@atoms, @pages, @utils..)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
