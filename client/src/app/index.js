import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import loginFormReducer from "../features/auth/loginFormSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    loginForm: loginFormReducer,
});

export default rootReducer;
