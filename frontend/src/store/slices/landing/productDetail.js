import { createSlice } from "@reduxjs/toolkit";

const ProductDetail = createSlice({
    name: 'ProductDetail',
    initialState: {
        productDetail: null,
        icon: null 
    },
    reducers: {
        AddProductDetail: (state, action) => {
            state.productDetail =  action.payload
            // console.log('aa', action.payload)
        },
        AddIcon: (state, action) => {
            state.icon =  action.payload
        }
    }
});



export const { AddProductDetail, AddIcon } = ProductDetail.actions;
export default ProductDetail.reducer;