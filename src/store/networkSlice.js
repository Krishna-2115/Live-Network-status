import { createSlice } from '@reduxjs/toolkit';

const networkSlice = createSlice({
    name: 'network',
    initialState: {
        status: navigator.onLine ? "Online" : "Offline",
    },
    reducers: {
        setOnline: (state) => {
            state.status = "Online";
        },
        setOffline: (state) => {
            state.status = "Offline";
        },
    },
});

export const { setOnline, setOffline } = networkSlice.actions;
export default networkSlice.reducer;
