const AuthService = () => {
  const login = (username, password) => {
    if (username === 'user' && password === 'user') {
      localStorage.setItem('token', 'user_token');
      localStorage.setItem('role', 'user');
      console.log('passo da 6');
      return Promise.resolve('logged as user');
    }
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'admin_token');
      localStorage.setItem('role', 'admin');
      return Promise.resolve('logged as admin');
    }
    return Promise.reject(new Error('errors.wrong_credentials'));
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return Promise.resolve('logged out');
  };

  const isAdmin = () => (localStorage.getItem('role') === 'admin');

  const isAuthenticated = () => (localStorage.getItem('role') === 'user' && localStorage.getItem('token') !== null);

  return {
    login, isAdmin, isAuthenticated, logout,
  };
};

export default AuthService;
