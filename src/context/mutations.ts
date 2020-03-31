
const mutations = (state: any) => {
    const setIsAuthenticated = (newValue: boolean) => {
        return {isAuthenticated: newValue};
    };

    const setIsAdmin = (newValue: boolean) => {
        return {isAdmin: newValue};
    };

    return {setIsAuthenticated, setIsAdmin};
};

export default mutations;