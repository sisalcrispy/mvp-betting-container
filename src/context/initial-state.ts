import AuthService from '../services/auth.service';
import TranslationsService from '../services/translations.service';
import GlobalState from "../types/globalState.interface";

const { isAdmin, isAuthenticated } = AuthService();
const { t, otherLanguage } = TranslationsService();

const initialState: GlobalState = {
  isAdmin: isAdmin(),
  isAuthenticated: isAuthenticated(),
  t,
  otherLanguage,
};

export default initialState;
