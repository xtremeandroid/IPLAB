import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

//Using React
// const myElement = <h1>This is an Element rendered using JSX in React.</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//Using Normal Javascript
// ReactDOM.render(<h1>This is an Element rendered using JSX in React.</h1>,
// document.getElementById('root'));
 
//Using Babel
ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "This is an Element rendered using JSX in React."), document.getElementById('root'));



reportWebVitals();
