import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import Store from './store';
import makeInspectable from 'mobx-devtools-mst'
import { onPatch } from 'mobx-state-tree';

// const Provider = React.createContext(null);

const store = Store.create({});

const startDebugging = () => {
    onPatch(store, patch => {
        console.log(patch)
    })
    makeInspectable(store)
}

if (process.env.NODE_ENV === 'development') startDebugging()

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
