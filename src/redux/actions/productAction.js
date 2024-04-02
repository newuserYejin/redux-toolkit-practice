function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/newuserYejin/h-m-react-router-practice/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        // setProductList(data)
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
        console.log("data: ", data)
    }
}

export const productAction = { getProducts }