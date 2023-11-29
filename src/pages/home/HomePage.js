import React, { useState, useEffect } from 'react';
import './Home.css'; // Your CSS file
import { Button } from 'react-bootstrap';

const HomePage = () => {
    const [selectedItem, setSelectedItem] = useState('0'); // State to store the selected item

    const curentUsername = sessionStorage.getItem('username');
    console.log('curentUsername: ', curentUsername)
    if (!curentUsername) {
        window.location.href = '/';
    }

    const handleItemClick = (item) => {
        setSelectedItem(item);
        if(selectedItem==='0') {
            window.location.href = '/bill';
        }
    };

    const handleBtnLogout = () => {
        sessionStorage.clear();
        window.location.href = '/';
    };

    useEffect(() => {
        const selected = sessionStorage.getItem('selectedItem');
        if (selected) {
            // const parsedData = JSON.parse(selectedItem);
            sessionStorage.removeItem('selectedItem');
            setSelectedItem(selected);
        }
    }, []);

    return (
        <header className="header">
            <div className={`header-item ${selectedItem.includes('0') ? 'active' : ''}`} onClick={() => handleItemClick('0')}>
                Tạo đơn hàng
            </div>
            <div className={`header-item ${selectedItem === '1' ? 'active' : ''}`} onClick={() => handleItemClick('1')}>
                Lịch sử giao dịch
            </div>
            <div id='btnLogout'>
                <b>{curentUsername}</b>
                <Button onClick={() => handleBtnLogout()}>Đăng xuất</Button>
            </div>
        </header>
    );
};

export default HomePage;
