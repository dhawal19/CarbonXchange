import { createSlice } from "@reduxjs/toolkit";



const loginFormSlice = createSlice({
    name: "loginForm",
    initialState: {
        type: "login",
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
    }
});

// actions
export const { setType } = loginFormSlice.actions;

// selectors
export const selectType = (state) => state.loginForm.type;

// reducer
export default loginFormSlice.reducer;