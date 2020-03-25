import AuthService from '../services/auth.service';
import TranslationsService from '../services/translations.service';

const { isAdmin, isAuthenticated } = AuthService();
const { t, otherLanguage, switchLanguage } = TranslationsService();

const actions = {
  updateUserStatus() {
    return ({ isAdmin: isAdmin(), isAuthenticated: isAuthenticated() });
  },
  switchLanguage() {
    switchLanguage();
    return ({ t, otherLanguage });
  },
};

export default actions;
