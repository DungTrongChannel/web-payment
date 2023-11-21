import React from 'react';
import './Transaction.css'; // Your CSS file
import qrCode from '../../images/qr-code.png'

function Transaction() {
  return (
    <div className="transaction-container">
      <h1>Thông tin giao dịch</h1>
      <div className="transaction-wrapper">
        <div className="left-section">
          {/* Placeholder for QR code image */}
          <img
            src={qrCode}
            alt="QR Code Image"
            className="qr-code-image"
          />
        </div>
        <div className="right-section">
          <div className="transaction-info">
            <p><strong>Chủ tài khoản:</strong> TRAN TRONG NGHIA</p>
            <p><strong>Số tài khoản:</strong> 0001111222333</p>
            <p><strong>Số tiền:</strong> 1,000 VND</p>
            <p><strong>Nội dung:</strong> GDJSỊEHDLOS Thanh toán hoá đơn</p>
            <p><strong>Trạng thái giao dịch:</strong> <i id='text-pending-paymnet'>Đang xử lý</i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
