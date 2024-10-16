// In your store.js or redux store file
import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
    },
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        },
    },
});

export const authActions = authSlice.actions; // Make sure this is correct
export const store = configureStore({
    reducer: authSlice.reducer,
});
