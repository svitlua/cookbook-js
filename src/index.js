import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import data from './testData';
console.log(data);

ReactDOM.render(
  <App recipes={data.recipes}/>,
  document.getElementById('root')
);
