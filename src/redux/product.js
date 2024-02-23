import { createSlice } from '@reduxjs/toolkit';
const product = createSlice({
    name: 'product',
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        addToCart(state, action) {
            console.log(action.payload);
            state.products.push(action.payload);
        },
        moveTocart(state, action) {
            state.products.splice(action.payload, 1);
        },
    },
});
console.log(product);
export const { addToCart, moveTocart } = product.actions;
export default product.reducer;
