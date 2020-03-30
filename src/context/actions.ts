import AuthService from "../services/auth.service";


const { isAdmin, isAuthenticated } = AuthService();

const actions =  (commit: (commitName: string, payload?: any) => void) => {

    const initUser = () => {
        commit('setIsAuthenticated', isAuthenticated());
        commit('setIsAdmin', isAdmin());

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


    return {initUser, updateUserStatus };

};



export default actions;