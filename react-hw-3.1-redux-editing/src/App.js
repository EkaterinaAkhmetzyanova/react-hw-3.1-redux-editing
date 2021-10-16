/* eslint-disable no-undef */
import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import store from './store';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import './App.css';

export default function App() {
  return (
    <>
      <ServiceAdd />
      <ServiceList />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
         <App />
      </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();