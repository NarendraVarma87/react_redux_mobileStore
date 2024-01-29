import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: 'CartReducer',
    initialState: {
        cartValue: [],
        totalPrice : []
    },
    reducers: {
        incrementCart: (state, action) => {
               state.cartValue.push(action.payload)
               const priceArray = state.cartValue.map(obj => obj.productPrice)
               state.totalPrice = priceArray.reduce((a,b) => a + b)
        }
    }
});

export const { incrementCart } = cartReducer.actions;
export default cartReducer.reducer;
