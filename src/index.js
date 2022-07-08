import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider'; 
import { registerLicense } from '@syncfusion/ej2-base';
// import reportWebVitals from './reportWebVitals';
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkJjXn5bcXZURmZZVkY=');
ReactDOM.render(
  <ContextProvider>
    <App />
    </ContextProvider>,

document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
