import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ErrorBoundary>
        <App/>
    </ErrorBoundary>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
