import '../home/Home.css'; // Your CSS file
import TransactionPage from './TransactionPage';
import HomePage from '../home/HomePage';

const TransactionPage2 = () => {
  return (
    <div className="App">
      <HomePage/>
      <div className="content">
        <TransactionPage />
      </div>
    </div>
  );
};

export default TransactionPage2;
