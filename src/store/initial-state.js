import AuthService from '../services/auth.service';

const { isAdmin, isAuthenticated } = AuthService();

const initialState = {
  isAdmin: isAdmin(),
  isAuthenticated: isAuthenticated(),
};

export default initialState;
