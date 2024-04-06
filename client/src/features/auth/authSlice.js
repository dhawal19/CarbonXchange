import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    }
});

// actions
export const { setUser, setToken } = authSlice.actions;

// selectors
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

// reducer
export default authSlice.reducer;