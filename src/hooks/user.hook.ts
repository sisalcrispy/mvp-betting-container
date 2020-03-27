import {useContext} from "react";
import context from "../context/context";

const useUser = () => {
    const {dispatch, state}  = useContext(context);

    const init = () => {
        if(state.isAuthenticated === undefined) {
            dispatch('updateUserStatus');
        }
        return {isAuthenticated: state.isAuthenticated, isAdmin: state.isAdmin};
    };

    return {...init()};
};

export default useUser;