import {Context, createContext as reactCreateContext} from "react";
import ContextProvider from "./components/context-provider.component";

const SisalStore = <StateInterface>() => {

    interface StoreInterface {
        initialState: StateInterface;
        actions: (commit: (commitName: string, payload?: any) => void) => any;
        mutations: (state: StateInterface) => any;
    }

    interface ContextInterface{
        state: StateInterface;
        dispatch: (s:string) => void;
        store: StoreInterface;
    }

    const createStore = (store: StoreInterface) => {
        const createContext = (): Context<ContextInterface> => {
            const dispatch = (s:string) => {};
            return reactCreateContext<ContextInterface>({state:store.initialState, dispatch, store});
        };

        return {createContext};
    };




    return {ContextProvider, createStore};
};

export default SisalStore;