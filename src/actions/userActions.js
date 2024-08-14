export const loginUser = (user) => async (dispatch) => {
    try {
        // Mocking an API call with role check for demonstration
        if (user.email === 'admin@example.com' && user.password === 'admin') {
            dispatch({
                type: 'USER_LOGIN_SUCCESS',
                payload: { ...user, role: 'admin' },
            });
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.message,
        });
    }
};

export const registerUser = (user) => async (dispatch) => {
    try {
        // Assume successful registration and dispatch user data to the store
        dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload: user,
        });
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload: error.message,
        });
    }
};
export const logoutUser = () => (dispatch) => {
    dispatch({ type: 'USER_LOGOUT' });
};

