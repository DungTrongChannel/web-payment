import '../home/Home.css'; // Your CSS file
import PaymentPage from './PaymentPage';
import HomePage from '../home/HomePage';

const PaymentPage2 = () => {
  return (
    <div className="App">
      <HomePage/>
      <div className="content">
        <PaymentPage />
      </div>
    </div>
  );
};

export default PaymentPage2;
