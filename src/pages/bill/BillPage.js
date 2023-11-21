import React, { useState } from 'react';

import './Bill.css'; // Import your CSS file

const BillPage = (e) => {
  const [productName, setProductName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [content, setContent] = useState('');

  const handlePayment = () => {
    console.log(`Product Name: ${productName}, Unit Price: ${unitPrice}, Content: ${content}`);
    // Handle payment logic here
    localStorage.setItem('selectedItem', '0.1');
    window.location.href = `/home`;
  };

  return (
    <div className="bill-container">
      <h1>Tạo mới đơn hàng</h1>
      <form className="bill-form">
        <div className="form-group">
          <label htmlFor="productName">Tên sản phẩm:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="unitPrice">Đơn giá:</label>
          <input
            type="text"
            id="unitPrice"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Nội dung:</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="button" onClick={handlePayment}>
          Thanh toán
        </button>
      </form>
    </div>
  );
};

export default BillPage;
