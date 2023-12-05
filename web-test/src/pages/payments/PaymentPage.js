import React, { useState } from 'react';
import prodConfig from '../../config';
import './Payment.css';

import mbIcon from '../../images/mb-icon.jpg';
import vpIcon from '../../images/vp-icon.png';
import acbIcon from '../../images/acb-icon.jpg';

function Payment() {

  const handleClick = async (value) => {
    let text = "Xác nhận thanh toán qua ngân hàng: " + value;
    if (window.confirm(text) == true) {
      let billInfoObject = JSON.parse(sessionStorage.getItem('billInfo'));
      billInfoObject.userName = sessionStorage.getItem('username');
      if (value === 'ACB') {
        billInfoObject.accountNo = prodConfig.ACB_ACCOUNT_NO;
        billInfoObject.accountName = prodConfig.ACB_ACCOUNT_NAME;
        billInfoObject.acqId = prodConfig.ACB_ID;
        billInfoObject.acqName = value;
                
      } else if (value === 'MB') {
        

      }
      // add template
      billInfoObject.format = "text";
      billInfoObject.template = "compact";
      
      sessionStorage.setItem('billInfo', JSON.stringify(billInfoObject))
      window.location.href = `/transaction`;
    }

    // alert(value)
    // window.location.href = `/transaction`;
  };

  return (
    <div className="App">
      <h1>Chọn ngân hàng</h1>
      <div className="table-container">
        <table className="bank-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Mã ngân hàng</th>
              <th>Tên ngân hàng</th>
            </tr>
          </thead>
          <tbody>
            <tr
              onClick={() => handleClick('ACB')}
            >
              <td><img
                src={acbIcon}
                alt="QR Code Image"
                className="icon-image"
              /></td>
              <td>ACB</td>
              <td>Ngân hàng á châu</td>
            </tr>
            <tr
              onClick={() => handleClick('MB')}
            >
              <td><img
                src={mbIcon}
                alt="QR Code Image"
                className="icon-image"
              /></td>
              <td>MB</td>
              <td>Ngân hàng quân đội</td>
            </tr>
            <tr
              onClick={() => handleClick('VP')}
            >
              <td><img
                src={vpIcon}
                alt="QR Code Image"
                className="icon-image"
              /></td>
              <td>VP</td>
              <td>Ngân hàng thương mại cổ phần</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payment;
