import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    id: '',
    password: '',
    auth: false
}

// export const authAction = { login, logout }

// function authReducer(state = initialState, action) {
//     let { type, payload } = action
//     switch (type) {
//         case "LOGIN_SUCCESS":
//             console.log("login success!!!!!!!!!!!!")
//             return { ...state, id: payload.id, password: payload.password, auth: true }     // 각각 true false 설정이 아닌 !state.auth도 가능
//         case "LOGOUT_SUCCESS":
//             console.log("logot success")
//             return { ...state, id: payload.id, password: payload.password, auth: false }
//         default:
//             return { ...state }
//     }

// }

// export default authReducer

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getLogin(state, action) {
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.auth = true;
        },
        getLogout(state, action) {
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.auth = false;
        }
    }
})

export const { getLogin, getLogout } = authSlice.actions
export default authSlice.reducer