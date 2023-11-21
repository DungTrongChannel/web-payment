import React, { useState } from 'react';
import './Payment.css';

import mbIcon from '../../images/mb-icon.jpg';
import tcbIcon from '../../images/tcb-icon.jpg';
import vpIcon from '../../images/vp-icon.png';

function Payment(props) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (value) => {
    setSelectedRow(value);
    // alert(value)
    localStorage.setItem('selectedItem', '0.2');
    window.location.href = `/home`;
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
              className={selectedRow === 'MB' ? 'selected-row' : ''}
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
              className={selectedRow === 'Techcombank' ? 'selected-row' : ''}
              onClick={() => handleClick('Techcombank')}
            >
              <td><img
                src={tcbIcon}
                alt="QR Code Image"
                className="icon-image"
              /></td>
              <td>Techcombank</td>
              <td>Ngân hàng kỹ thương</td>
            </tr>
            <tr
              className={selectedRow === 'VP bank' ? 'selected-row' : ''}
              onClick={() => handleClick('VP bank')}
            >
              <td><img
                src={vpIcon}
                alt="QR Code Image"
                className="icon-image"
              /></td>
              <td>VP bank</td>
              <td>Ngân hàng thương mại cổ phần</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payment;
