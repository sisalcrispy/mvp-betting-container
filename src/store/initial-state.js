import AuthService from '../services/auth.service';
import TranslationsService from '../services/translations.service';


const { isAdmin, isAuthenticated } = AuthService();
const { t, otherLanguage } = TranslationsService();

const initialState = {
  isAdmin: isAdmin(),
  isAuthenticated: isAuthenticated(),
  t,
  otherLanguage,
};

export default initialState;
