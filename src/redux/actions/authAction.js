import { getLogin, getLogout } from "../reducers/authSlice"

function login(id, password) {
    return (dispatch, getState) => {
        // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } })
        dispatch(getLogin(id, password))
    };
}

function logout(id, password) {
    return (dispatch, getState) => {
        // dispatch({ type: "LOGOUT_SUCCESS", payload: { id: '', password: "" } })
        dispatch(getLogout(id = "", password = ""))
    }
}

export const authAction = { login, logout }