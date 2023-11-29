import React, { useState, useEffect } from 'react';
import * as API from '../../api/api'
import './Transaction.css'; // Your CSS file

function Transaction() {
  const [imageData, setImageData] = useState('');
  const [billInfoObject, setBillInfoObject] = useState('');

  useEffect(() => {
    const fetchData = async () => {
    // call api generate QR code
    let billInfoObject = JSON.parse(sessionStorage.getItem('billInfo'));
    setBillInfoObject(billInfoObject);
    const response = await API.apiGenQrCode(billInfoObject);
    if (response) {
      console.log('response 1: ', response)
      setImageData(response.data.qrDataURL);
    };
    }
    fetchData();
  }, []);

  return (
    <div className="transaction-container">
      <h1>Thông tin giao dịch</h1>
      <div className="transaction-wrapper">
        <div className="left-section">
          {/* Placeholder for QR code image */}
          <img
            src={imageData}
            alt="QR Code Image"
            className="qr-code-image"
          />
        </div>
        <div className="right-section">
          <div className="transaction-info">
            <p><strong>Chủ tài khoản:</strong> {billInfoObject.accountName}</p>
            <p><strong>Số tài khoản:</strong> {billInfoObject.accountNo}</p>
            <p><strong>Số tiền:</strong> {billInfoObject.amount} VND</p>
            <p><strong>Nội dung:</strong> {billInfoObject.addInfo}</p>
            <p><strong>Trạng thái giao dịch:</strong> <i id='text-pending-paymnet'>Đang xử lý</i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
