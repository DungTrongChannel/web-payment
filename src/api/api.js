import prodConfig from '../../src/config';

const apiLogin = async (data) => {
  const url = prodConfig.BASE_URL + '/user/login';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    alert("Có lỗi xảy ra")
  }
}

const apiRegister = async (data) => {
  const url = prodConfig.BASE_URL + '/user/register';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (!response.ok) {
      alert(responseData.errorMsg)
    } else {
      window.location.href = '/login';
    }

    return responseData;
  } catch (error) {
    alert("Có lỗi xảy ra")
  }
}

const apiGenQrCode = async (data) => {
  const url = 'https://api.vietqr.io/v2/generate';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    alert("Có lỗi xảy ra")
  }
}

export { apiLogin, apiRegister, apiGenQrCode};