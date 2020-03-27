import GlobalState from "../types/globalState.interface";
import Sisal from "sisal-mvp-betting-library";
import mutations from "./mutations";
import actions from "./actions";

const initialState: GlobalState = {
    isAdmin: undefined,
    isAuthenticated: undefined,
    t: (s: string) => (s),
    otherLanguage: () => ('it')
};

const {createStore} = Sisal.SisalStore<GlobalState>();
const {createContext} = createStore({initialState, mutations, actions});

const context = createContext();


export default context;