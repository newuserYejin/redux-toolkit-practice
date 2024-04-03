import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

let initialState = {
    productList: [],
    seletedProduct: null,
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk(
    'product/fetchAll', async (searchQuery, thunkAPI) => {
        try {
            let url = `https://my-json-server.typicode.com/newuserYejin/h-m-react-router-practice/products?q=${searchQuery}`
            let response = await fetch(url)
            return await response.json()
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    })

export const fetchProductDetail = createAsyncThunk(
    'product/fetchDetailAll', async (id, thunkAPI) => {
        try {
            let url = `https://my-json-server.typicode.com/newuserYejin/h-m-react-router-practice/products/${id}`
            let response = await fetch(url)
            return await response.json()
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }

)

// function productReducer(state = initaialState, action) {
//     let { type, payload } = action
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, productList: payload.data }
//         default:
//             return { ...state }
//     }
// }

// export default productReducer

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.productList = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(fetchProductDetail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.isLoading = false
                state.seletedProduct = action.payload
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer
