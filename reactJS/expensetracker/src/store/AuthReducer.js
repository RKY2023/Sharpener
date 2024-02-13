import { createSlice } from '@reduxjs/toolkit';

const initialAuthStore = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthStore,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;