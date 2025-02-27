import './index.css';
import NetworkStatus from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Updated import
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Updated root API
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NetworkStatus />
    </Provider>
  </React.StrictMode>
);
