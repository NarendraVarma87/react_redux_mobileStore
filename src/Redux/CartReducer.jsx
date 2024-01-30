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
        },
        decrementCart : (state , action) => {
            const index = state.cartValue.findIndex(obj => obj.productName === action.payload.productName)
            if(index > -1){
                state.cartValue.splice(index,1);
            }
            const priceArray = state.cartValue.map((obj)=> obj.productPrice)
            state.totalPrice = priceArray.reduce((a,b) => a+b,0)
        }
    }
});

export const { incrementCart , decrementCart } = cartReducer.actions;
export default cartReducer.reducer;
