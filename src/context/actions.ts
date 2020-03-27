import Libraries from 'sisal-mvp-betting-library';
import AuthService from "../services/auth.service";


const trans = Libraries.TranslationsService('global');
const { isAdmin, isAuthenticated } = AuthService();

const actions =  (commit: (commitName: string, payload?: any) => void) => {

    const updateUserStatus = () => {
        commit('setIsAuthenticated', isAuthenticated());
        commit('setIsAdmin', isAdmin());
        return Promise.resolve(true);
    };

    const switchLanguage = () => {
        trans.switchLanguage();
        commit('setT', trans.t);
        commit('setOtherLanguage', trans.otherLanguage);
        return Promise.resolve(true);
    };

    return {updateUserStatus, switchLanguage};

};



export default actions;