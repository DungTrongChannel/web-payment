import '../home/Home.css'; // Your CSS file
import HistoryPage from './HistoryPage';
import HomePage from '../home/HomePage';

const HistoryPage2 = () => {
  return (
    <div className="App">
      <HomePage selected='history'/>
      <div className="content">
        <HistoryPage />
      </div>
    </div>
  );
};

export default HistoryPage2;
