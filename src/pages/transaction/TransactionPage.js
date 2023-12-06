import React, { useState, useEffect } from 'react';
import * as API from '../../api/api'
import { v4 as uuidv4 } from 'uuid';

import './Transaction.css'; // Your CSS file

function Transaction() {
  const [imageData, setImageData] = useState('');
  const [billInfoObject, setBillInfoObject] = useState('');
  const [statusProcess, setStatusProcess] = useState(0);

  useEffect(() => {
    const fetchData = async () => {

      let billInfoObject = JSON.parse(sessionStorage.getItem('billInfo'));

      let uuid = uuidv4().replace(/-/g, '');
      billInfoObject.uuid = uuid;
      billInfoObject.addInfo = uuid;
      console.log('billInfoObject.uuid:', billInfoObject.uuid)
      console.log('billInfoObject.addInfo', billInfoObject.addInfo)

      setBillInfoObject(billInfoObject);
      // call api generate QR code
      const response = await API.apiGenQrCode(billInfoObject);
      if (response) {
        setImageData(response.data.qrDataURL);
        // cal api save transaction
        billInfoObject.accountNo = '' + billInfoObject.accountNo;
        API.apiCreateTransaction(billInfoObject);

        let intervalId;
        // Start the interval
        intervalId = setInterval(() => {
          getHistoryAndChangeStatusACB(billInfoObject.uuid, billInfoObject.acqName, intervalId); // Call the function inside the interval
        }, 3000); // Fetch data every 10 seconds (10000 milliseconds)
      };
    }
    fetchData();
  }, []);

  async function getHistoryAndChangeStatusACB(uuid, acqName, intervalId) {
    try {
      const responseHistory = await API.apiGetHistoryACB(uuid, acqName);
      if (responseHistory === true) {
        setStatusProcess(1);
      }
    } catch (error) {
      // Handle fetch errors
      console.error(error.message);
    }
  };

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
            <p><strong>Nội dung:</strong> {billInfoObject.content}</p>
            {/* <p><strong>Nội dung 1:</strong> {billInfoObject.uuid}</p> */}
            <p><strong>Trạng thái giao dịch:</strong> <i id='text-pending-paymnet'>{statusProcess === 0 ? 'Đang xử lý' : 'Thành công'}</i></p>
          </div>
        </div>
      </div>
      <div className='trans'>
        <h3>Lưu ý:</h3>
        <h3>- Nhân viên không load lại trang</h3>
        <h3>- Khách hàng không thay đổi nội dung giao dịch</h3>
      </div>
    </div>
  );
}

export default Transaction;
