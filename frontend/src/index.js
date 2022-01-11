import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IsPostCreateOpenProvider from './Context/PostCreate';

ReactDOM.render(
    <IsPostCreateOpenProvider>
        <App />
    </IsPostCreateOpenProvider>
    , document.getElementById('root'));