// import { productActions } from "../reducers/productSlice"

// function getProducts(searchQuery) {
//     return async (dispatch, getState) => {
//         let url = `https://my-json-server.typicode.com/newuserYejin/h-m-react-router-practice/products?q=${searchQuery}`
//         let response = await fetch(url)
//         let data = await response.json()
//         // setProductList(data)
//         // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
//         dispatch(productActions.getAllproducts({ data }))
//         console.log("data: ", data)
//     }
// }

// function getProductDetail(id) {
//     return async (dispatch) => {
//         let url = `https://my-json-server.typicode.com/newuserYejin/h-m-react-router-practice/products/${id}`
//         let response = await fetch(url)
//         let data = await response.json()
//         // dispatch({ type: "get_productDetail_success", payload: { data } })
//         dispatch(productActions.getSingleProduct({ data }))
//     }
// }

// export const productAction = { getProductDetail }