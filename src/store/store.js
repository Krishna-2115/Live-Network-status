import { configureStore } from '@reduxjs/toolkit';
import networkReducer from './networkSlice';

const store = configureStore({
    reducer: {
        network: networkReducer,
    },
});

export default store;
