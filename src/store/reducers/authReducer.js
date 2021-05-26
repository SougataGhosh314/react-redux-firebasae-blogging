const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case "LOGIN_ERROR":
            console.log("error");
            return {
                ...state,
                authError: "Login failed"
            }
        case "LOGIN_SUCCESS":
            console.log("login works");
            return {
                ...state,
                authError: null,
            }

        case "SIGNOUT_SUCCESS":
            console.log("SignOut success");
            return state;
        case "SIGNOUT_ERROR":
            console.log("SignOut failed");
            return state;

        case "SIGNUP_SUCCESS":
            console.log("SignUp success");
            return {
                ...state,
                authError: null,
            }
        case "SIGNUP_ERROR":
            console.log("SignUp failed");
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
}

export default authReducer; 