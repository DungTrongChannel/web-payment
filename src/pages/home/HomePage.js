import React, { useState, useEffect } from 'react';
import './Home.css'; // Your CSS file
import { Button } from 'react-bootstrap';
import BillPage from '../bill/BillPage';
import Payment from '../payments/PaymentPage';
import Transaction from '../transaction/TransactionPage';
import History from '../history/HistoryPage';

const HomePage = () => {
  const [selectedItem, setSelectedItem] = useState('0'); // State to store the selected item

  // Function to handle header item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const data = localStorage.getItem('selectedItem');
    if (data) {
      // const parsedData = JSON.parse(selectedItem);
      // Use the parsedData as needed
      console.log(data);
      // Don't forget to clear the stored data if needed
      localStorage.removeItem('selectedItem');
      setSelectedItem(data);
    }
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className={`header-item ${selectedItem.includes('0') ? 'active' : ''}`} onClick={() => handleItemClick('0')}>
          Tạo đơn hàng
        </div>
        <div className={`header-item ${selectedItem === '1' ? 'active' : ''}`} onClick={() => handleItemClick('1')}>
        Lịch sử giao dịch
        </div>
        <div id='btnLogout'>
          <Button>Đăng xuất</Button>
        </div>
      </header>
      <div className="content">
        {/* Content whose text color will change based on selected item */}
        {
          (selectedItem === '0' && (
            <BillPage />
          )) || (selectedItem === '0.1' && (
            <Payment />
          )) || (selectedItem === '0.2' && (
            <Transaction/>
          )) || (selectedItem === '1' && (
            <History/>
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
