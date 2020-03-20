const AuthService = () => {
  const login = (username, password) => {
    if (username === 'user' && password === 'user') {
      localStorage.setItem('token', 'user_token');
      localStorage.setItem('role', 'user');
      return Promise.resolve('logged as user');
    }
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'admin_token');
      localStorage.setItem('role', 'admin');
      return Promise.resolve('logged as admin');
    }
    return Promise.reject(new Error('errors.wrong_credentials'));
  };

  return { login };
};

export default AuthService;
