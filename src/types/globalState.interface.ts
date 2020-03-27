export default interface GlobalState {
isAuthenticated: boolean|undefined;
    isAdmin: boolean|undefined;
    t: ((stringCode:string)  => string)|(() => {});
    otherLanguage: (() => string)|(() => {});
}

