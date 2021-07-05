import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContext } from './context/ThemeContext';

const { Provider: ThemeProvider } = ThemeContext;

const colors = ['#61DAFB', '#E27D60', '#41B3A3', '#C38D9E'];

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider value={{ colors }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
