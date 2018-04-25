import { authConstants } from '../constants';
import { authService } from '../services';
import { history } from '../helpers';

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        authService.login(username, password)
            .then(
                tokens => {
                    dispatch(success(tokens));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    //dispatch(alertActions.error(error));
                }
            );
    };

    function request(username) { return { type: authConstants.LOGIN_REQUEST, username } }
    function success(tokens) { return { type: authConstants.LOGIN_SUCCESS, tokens } }
    function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
}

const logout = () => {
    authService.logout();
    return {
        type: authConstants.LOGOUT
    }
}

export const authActions = {
    login,
    logout
};