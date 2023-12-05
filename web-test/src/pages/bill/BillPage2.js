import '../home/Home.css'; // Your CSS file
import BillPage from './BillPage';
import HomePage from '../home/HomePage';

const BillPage2 = () => {
  return (
    <div className="App">
      <HomePage selected='bill'/>
      <div className="content">
        <BillPage />
      </div>
    </div>
  );
};

export default BillPage2;
