import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import changeCount from './reducers/changeCount';
import createStore from './createStore';
export function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

render();
