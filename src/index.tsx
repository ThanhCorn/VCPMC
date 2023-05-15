import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/UserContext';
import { DataProvider } from './context/DataContext';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <UserProvider>
      <DataProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </DataProvider>
    </UserProvider>
  </React.StrictMode>,
);
