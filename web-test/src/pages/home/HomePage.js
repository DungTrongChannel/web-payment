import React, { useState, useEffect } from 'react';
import './Home.css'; // Your CSS file
import { Button } from 'react-bootstrap';

const HomePage = (props) => {
    const [selectedItem, setSelectedItem] = useState(props.selected); // State to store the selected item
    const curentUsername = sessionStorage.getItem('username');
    
    if (!curentUsername) {
        window.location.href = '/';
    }

    const handleItemClick = (item) => {
        setSelectedItem(item);
        console.log('selected: ', item)

        // console.log('handleItemClick: ', selectedItem)

        if (item === 'bill') {
            window.location.href = '/bill';
        }
        if (item === 'history') {
            window.location.href = '/history';
        }
    };

    const handleBtnLogout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    };

    return (
        <header className="header">
            <div>
                <p className={`header-item ${selectedItem === 'bill' ? 'active' : ''}`} onClick={() => handleItemClick('bill')}>Tạo đơn hàng</p>
            </div>
            <div>
                <p className={`header-item ${selectedItem === 'history' ? 'active' : ''}`} onClick={() => handleItemClick('history')}>Lịch sử giao dịch</p>
            </div>
            <div id='btnLogout'>
                <b>{curentUsername}</b>
                <Button onClick={() => handleBtnLogout()}>Đăng xuất</Button>
            </div>
        </header>
    );
};

export default HomePage;
