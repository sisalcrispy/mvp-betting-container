export default interface GlobalState {
    isAuthenticated: boolean;
    isAdmin: boolean;
    t: (stringCode:string)  => string;
    otherLanguage: () => string;
}

