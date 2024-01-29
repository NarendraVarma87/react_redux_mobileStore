import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartReducer';

export const store = configureStore({
    reducer: {
        cartReducer: CartReducer,
    },
});

export default store;
