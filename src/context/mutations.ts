import AuthService from '../services/auth.service';
import TranslationsService from '../services/translations.service';

const { isAdmin, isAuthenticated } = AuthService();
const { t, otherLanguage } = TranslationsService();

const mutations = {
  updateUserStatus() {
    return ({ isAdmin: isAdmin(), isAuthenticated: isAuthenticated() });
  },
  updateLanguage() {
    return ({ t, otherLanguage });
  },
};

export default mutations;
