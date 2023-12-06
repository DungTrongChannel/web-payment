import React, { useEffect, useState } from 'react';
import moment from 'moment';
import * as API from '../../api/api'
import './History.css'; // Your CSS file

function History() {
  // const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const today = moment(new Date()).format('YYYY-MM-DD');
  const [fromDateInput, setFromDateInput] = useState(today);
  const [toDateInput, setToDateInput] = useState(today);
  const [userName, setUserName] = useState('');
  const [btnClickedIndex, setBtnClickedIndex] = useState(0);

  // PAGING
  const itemsPerPage = 5;
  const [data, setData] = useState([]); // State to hold the fetched data
  const [buttonIndexes, setButtonIndexes] = useState([]);

  // useEffect(() => {
  // }, []);

  function handleTextInput(event) {
    setUserName(event.target.value);
  }

  function handleFromdateChange(event) {
    setFromDateInput(event.target.value);
  }

  function handleTodateChange(event) {
    setToDateInput(event.target.value);
  }

  const getStatusText = (status) => {
    return status === 0 ? 'Đang xử lý' : 'Thành công';
  };

  const getDateFormat = (date) => {
    return date = moment(date).format('DD-MM-YYYY, h:mm a');
  };


  const handleBtnSearch = async () => {
    setBtnClickedIndex(0);
    const response = await API.apiHistoryTransaction(userName, fromDateInput, toDateInput, 0, itemsPerPage);
    if (response) {
      console.log('response', response)
      setData(response.content);
      setButtonIndexes(Array.from({ length: response.totalPages }, (_, index) => index))
    }
  }

  const handlePageChange = async (pageNumber) => {
    console.log('pageNumber: ', pageNumber)
    setBtnClickedIndex(pageNumber);

    const response = await API.apiHistoryTransaction(userName, fromDateInput, toDateInput, pageNumber, itemsPerPage);
    if (response) {
      console.log('response', response)
      setData(response.content);
      setButtonIndexes(Array.from({ length: response.totalPages }, (_, index) => index))
    }
  };

  return (
    <div className="history-container">
      <h1 className="title">Lịch sử giao dịch</h1>
      <div className="input-section">
        <div className="input-field">
          <label htmlFor="employeeCode">Mã nhân viên:</label>
          <input onChange={handleTextInput} value={userName} type="text" id="employeeCode" name="employeeCode" />
        </div>
        <div className="date-pickers">
          <div className="input-field">
            <label htmlFor="fromDate">Từ ngày:</label>
            <input onChange={handleFromdateChange} value={fromDateInput} type="date" id="fromDate" name="fromDate" />
          </div>
          <div className="input-field">
            <label htmlFor="toDate">Đến ngày:</label>
            <input onChange={handleTodateChange} value={toDateInput} type="date" id="toDate" name="toDate" />
          </div>
        </div>
        <button onClick={handleBtnSearch} id='btnSearch'>Tìm kiếm</button>
      </div>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Mã NV</th>
            <th className='changeDisplay'>Ngân hàng</th>
            <th className='changeDisplay'>STK</th>
            <th>Số tiền</th>
            <th className='changeDisplay'>Thời gian</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.userName}</td>
              <td className='changeDisplay'>{item.bankName}</td>
              <td className='changeDisplay'>{item.bankNumber}</td>
              <td>{item.amount}</td>
              <td className='changeDisplay'>{getDateFormat(item.createdDate)}</td>
              <td style={{ color: item.status === 0 ? 'red' : 'green' }}>{getStatusText(item.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination buttons */}
      <div>
        {buttonIndexes.map((index) => (
          <button className='buttonPaging' key={index} onClick={() => handlePageChange(index)}
            style={{ backgroundColor: btnClickedIndex === index ? 'rgb(227 95 35)' : 'rgb(60 60 67)' }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default History;
