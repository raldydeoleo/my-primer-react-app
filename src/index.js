import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(  
 <React.StrictMode>   
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
