import { userConstants } from '../_constants';

export const userActions = {
    addField
};

function addField(val) {
    return dispatch => {
        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };


}

