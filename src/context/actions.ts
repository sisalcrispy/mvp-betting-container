import Sisal from 'sisal-mvp-betting-library';
import AuthService from "../services/auth.service";


const trans = Sisal.SisalTranslations().TranslationsService('global');
const { isAdmin, isAuthenticated } = AuthService();

const actions =  (commit: (commitName: string, payload?: any) => void) => {

    const init = () => {
        commit('setIsAuthenticated', isAuthenticated());
        commit('setIsAdmin', isAdmin());
        commit('setT', trans.t);
        commit('setOtherLanguage', trans.otherLanguage);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise A win!');
            }, 800);
        });
    };

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

    return {init, updateUserStatus, switchLanguage};

};



export default actions;