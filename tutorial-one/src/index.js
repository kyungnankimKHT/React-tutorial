import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; // 모두 사용하는 css 는 index에 설정
const root = ReactDOM.createRoot(document.getElementById('root'));

{/*  <React.StrictMode> </React.StrictMode> 삭제해도됨 */}

root.render(
    <App />
  
);

reportWebVitals();
