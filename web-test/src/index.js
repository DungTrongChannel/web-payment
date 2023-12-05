import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import page components
import LoginForm from './pages/login/LoginPage';
import RegisterForm from './pages/register/RegisterPage';
import BillPage2 from './pages/bill/BillPage2';
import TransactionPage2 from './pages/transaction/TransactionPage2';
import PaymentPage2 from './pages/payments/PaymentPage2';
import HistoryPage2 from './pages/history/HistoryPage2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/bill" element={<BillPage2 />} />
      <Route path="/transaction" element={<TransactionPage2 />} />
      <Route path="/payment" element={<PaymentPage2 />} />
      <Route path="/history" element={<HistoryPage2 />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
