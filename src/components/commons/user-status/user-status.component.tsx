import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import useLoginForm from '../../../hooks/login-form.hook';
import context from "../../../context/context";

import "./user-status.component.scss"

const UserStatus = () => {

    const history = useHistory();
    const {state, dispatch} = useContext(context);
    const {logoutAndRedirect} = useLoginForm(history);

    return (

        <div className="user-status">
            <p>{state.isAuthenticated
                ? (`Logged as: ${state.isAdmin ? 'Admin' : 'User'}`)
                : ('Not logged')}
            </p>
            <span>\\</span>
            {state.isAuthenticated ? (
                <button
                    onClick={() => logoutAndRedirect(dispatch)}
                    type="button"
                >Logout
                </button>
            ) : (
                <Link to="/">Login</Link>
            )}

        </div>
    );
};

export default UserStatus;
