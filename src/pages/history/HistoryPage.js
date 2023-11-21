import React, { useEffect } from 'react';
import './History.css'; // Your CSS file

function History() {
  useEffect(() => {
    // Set today's date for the fromDate and toDate inputs
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    
    const fromDateInput = document.getElementById('fromDate');
    const toDateInput = document.getElementById('toDate');

    if (fromDateInput && toDateInput) {
      fromDateInput.value = today;
      toDateInput.value = today;
    }
  }, []);

  return (
    <div className="history-container">
      <h1 className="title">Lịch sử giao dịch</h1>
      <div className="input-section">
        <div className="input-field">
          <label htmlFor="employeeCode">Mã nhân viên:</label>
          <input type="text" id="employeeCode" name="employeeCode" />
        </div>
        <div className="date-pickers">
          <div className="input-field">
            <label htmlFor="fromDate">Từ ngày:</label>
            <input type="date" id="fromDate" name="fromDate" />
          </div>
          <div className="input-field">
            <label htmlFor="toDate">Đến ngày:</label>
            <input type="date" id="toDate" name="toDate" />
          </div>
        </div>
      </div>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Mã NV</th>
            <th>Tên</th>
            <th>Tổng đơn</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          <tr>
            <td>12345</td>
            <td>Nguyen Trong</td>
            <td>21</td>
            <td>3.000.000</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default History;
