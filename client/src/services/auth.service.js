function loginUser(user) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }

  return fetch(`auth/login`, requestOptions)
    .then(handleResponse)
    .then(data => {
      if (data.token) {
        login(data.token)
      }

      return data
    })
}

function registrationUser(user) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  }

  return fetch(`auth/registration`, requestOptions)
    .then(handleResponse)
    .then(data => {
      if (data.token) {
        login(data.token)
      }

      return data
    })
}

function login(token) {
  localStorage.setItem('token', JSON.stringify(token))
}

function logout() {
  localStorage.removeItem('token')
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const authService = {
  loginUser,
  registrationUser,
  login,
  logout
}
