import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
         <App/>
      </RouterProvider>
    </Provider>
  // </React.StrictMode>
);

