import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { v4 as uuidv4 } from 'uuid';

import './Bill.css'; // Import your CSS file

const BillPage = (e) => {
  const [productName, setProductName] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);
  const [content, setContent] = useState('');

  const handlePayment = () => {
    if (productName.trim().length === 0) {
      alert('Nhập tên sản phẩm');
    } else if (unitPrice === 0) {
      alert('Nhập giá sản phẩm');
    } else {
      const generatedUUID = uuidv4();
      let billInfo = {
        "amount": unitPrice,
        "addInfo": generatedUUID + ' - ' + content
      }
      sessionStorage.setItem('billInfo', JSON.stringify(billInfo));
      window.location.href = `/payment`;
    }
  };

  return (
    <div className="bill-container">
      <h1>Tạo mới đơn hàng</h1>
      <form className="bill-form">
        <div className="form-group12">
          <label htmlFor="productName">Tên sản phẩm:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group12">
          <label htmlFor="unitPrice">Số tiền:</label>
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="Please enter a number"
            defaultValue={0}
            decimalsLimit={2}
            onValueChange={(value) => setUnitPrice(value)}
          />
        </div>
        <div className="form-group12">
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
