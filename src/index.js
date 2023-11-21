import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

// import page
import LoginForm from './pages/login/LoginPage';
import RegisterForm from './pages/register/RegisterPage';
import Home from './pages/home/HomePage';

const router = createBrowserRouter([
  {
      path: '/',
      element: <LoginForm />
  },
  {
      path: '/home',
      element: <Home />
  },
  {
      path: '/register',
      element: <RegisterForm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router = { router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
