import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as api from "../api"
import {  useNavigate } from 'react-router-dom';


export const createProduct = createAsyncThunk(
    "product/add",
    async ({ formValue, toast }, { rejectWithValue }) => {

        try {
            
            const response = await api.addNewProduct(formValue)
            toast.success("Successfull created Product")
            useNavigate("/")
            return response.data

        } catch (error) {
            return rejectWithValue(error.response.data)
        }

    }
)


const productSlice = createSlice({
    name: "Courrier",
    initialState: {
        product: {},
        products: [],
        error: "",
        loadings: false
    },
    extraReducers: {

        [createProduct.pending]: (state, action) => {
            state.loading = true
        },
        [createProduct.fulfilled]: (state, action) => {
            state.loading = false
            state.product = action.payload.data
        },
        [createProduct.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.message
        },




    }
})

export default productSlice.reducer