import { createSlice } from '@reduxjs/toolkit';

const initialAuthStore = {
    isAuthenticated: false,
    token: localStorage.getItem('token'),
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthStore,
    reducers: {
        checkLoginStatus(state){
            if(state.token != null && state.token != 'undefined' && state.token.length > 500){
                state.isAuthenticated = true;
            }
        },
        login(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload;
            localStorage.setItem('token',state.token);
        },
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;