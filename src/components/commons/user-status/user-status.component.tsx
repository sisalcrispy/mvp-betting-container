import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import useLoginForm from '../../../hooks/login-form.hook';
import context from "../../../context/context";

import "./user-status.component.scss"
import useUser from "../../../hooks/user.hook";

const UserStatus = () => {

    const history = useHistory();
    const {dispatch} = useContext(context);
    const {isAuthenticated, isAdmin} = useUser();

    const {logoutAndRedirect} = useLoginForm(history);

    return (

        <div className="user-status">
            <p>{isAuthenticated
                ? (`Logged as: ${isAdmin ? 'Admin' : 'User'}`)
                : ('Not logged')}
            </p>
            <span>\\</span>
            {isAuthenticated ? (
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
