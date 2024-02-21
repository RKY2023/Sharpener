import { createSlice } from '@reduxjs/toolkit';

const AuthInitialState = {
    token: null,
    isAuthenticated: false,
    user: '',
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: AuthInitialState,
    reducers: {
        login(state, actions) {

        },
    }
})

export const AuthActions = AuthSlice.actions;
export default AuthSlice;