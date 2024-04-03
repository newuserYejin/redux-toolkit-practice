let initialState = {
    id: '',
    password: '',
    auth: false
}

function authReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "LOGIN_SUCCESS":
            console.log("login success!!!!!!!!!!!!")
            return { ...state, id: payload.id, password: payload.password, auth: true }     // 각각 true false 설정이 아닌 !state.auth도 가능
        case "LOGOUT_SUCCESS":
            console.log("logot success")
            return { ...state, id: payload.id, password: payload.password, auth: false }
        default:
            return { ...state }
    }

}

export default authReducer