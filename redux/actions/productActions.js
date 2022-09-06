
export const setProducts = (products) => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}
export const selectedProduct = (product) => {
    return {
        type: "SELECTED_PRODUCT",
        payload: product
    }
}
export const removeSelectedProduct = () => {
    return {
        type: "REMOVE_SELECTED_PRODUCT",

    }
}

export const addToCart = (itemID) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            id: itemID
        }

    }
}
export const removeFromCart = (itemID) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: {
            id: itemID
        }
    }
}
export const adjustQty = (itemID, value) => {
    return {
        type: "ADJUST_QTY",
        payload: {
            id: itemID,
            qty: value
        }
    }
}
export const loadCurrentItem = (item) => {
    return {
        type: "LOAD_CURRENT_ITEM",
        payload: item


    }
}
export const count = () => {
    return {
        type: "COUNT",

    }
}
