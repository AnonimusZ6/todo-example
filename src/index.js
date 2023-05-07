import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ActiveComponent from './MainComponents/ActiveComponent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateComponent from './MainComponents/CreateComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorComponent from './MainComponents/ErrorComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <ActiveComponent />
  },
  {
    path: '/create',
    element: <CreateComponent />
  },
  {
    path: "*",
    element: <ErrorComponent />
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
