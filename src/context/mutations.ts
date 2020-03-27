
const mutations = (state: any) => {
    const setIsAuthenticated = (newValue: boolean) => {
        return {isAuthenticated: newValue};
    };

    const setIsAdmin = (newValue: boolean) => {
        return {isAdmin: newValue};
    };

    const setT = (newvalue: any) => {
        return {t: newvalue}
    };
    const setOtherLanguage = (newvalue: any) => {
        return {otherLanguage: newvalue}
    };

    return {setIsAuthenticated, setIsAdmin, setT, setOtherLanguage};
};

export default mutations;