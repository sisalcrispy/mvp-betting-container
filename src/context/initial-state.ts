import GlobalState from "../types/globalState.interface";

const initialState: GlobalState = {
    isAdmin: false,
    isAuthenticated: false,
    t: (s: string) => (s),
    otherLanguage: () => ('it')
};

export default initialState;