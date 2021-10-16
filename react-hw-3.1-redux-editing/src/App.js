/* eslint-disable no-undef */
import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import store from './store';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import './App.css';
import ServiceFilter from './components/ServiceFilter';

export default function App() {
  return (
    <>
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
         <App />
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

//serviceWorker.unregister();