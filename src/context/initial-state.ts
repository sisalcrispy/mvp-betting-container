import AuthService from '../services/auth.service';
import Libraries from 'sisal-mvp-betting-library';
import GlobalState from "../types/globalState.interface";

const { isAdmin, isAuthenticated } = AuthService();
const { t, otherLanguage } = Libraries.TranslationsService('global');

const initialState: GlobalState = {
  isAdmin: isAdmin(),
  isAuthenticated: isAuthenticated(),
  t,
  otherLanguage,
};

export default initialState;
