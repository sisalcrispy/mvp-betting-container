import AuthService from '../services/auth.service';
import Libraries from 'sisal-mvp-betting-library';

const { isAdmin, isAuthenticated } = AuthService();
const { t, otherLanguage } = Libraries.TranslationsService('global');

const mutations = {
  updateUserStatus() {
    return ({ isAdmin: isAdmin(), isAuthenticated: isAuthenticated() });
  },
  updateLanguage() {
    return ({ t, otherLanguage });
  },
};

export default mutations;
