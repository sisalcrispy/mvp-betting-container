import GlobalState from "../types/globalState.interface";
import SisalStore from "../components/commons/store/";
import mutations from "./mutations";
import actions from "./actions";
import initialState from "./initial-state";


const {createStore} = SisalStore<GlobalState>();
const {createContext} = createStore({initialState, mutations, actions});

const context = createContext();


export default context;