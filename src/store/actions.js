import AuthService from '../services/auth.service';

const { isAdmin, isAuthenticated } = AuthService();

const actions = {
  updateUserStatus() {
    return ({ isAdmin: isAdmin(), isAuthenticated: isAuthenticated() });
  },
};

export default actions;
