import GlobalState from "../types/globalState.interface";
import Sisal from "sisal-mvp-betting-library";
import mutations from "./mutations";
import actions from "./actions";

const initialState: GlobalState = {
    isAdmin: undefined,
    isAuthenticated: undefined,

};

const {createStore} = Sisal.Store<GlobalState>();
const {createContext, addToContext} = createStore({initialState, mutations, actions});
createContext();

const trans = Sisal.Translations().store;
const context = addToContext(trans.initialState, trans.mutations, trans.actions);


export default context;