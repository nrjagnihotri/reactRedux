

const initialState = {
    products: [],
    cart: [],//{id,tittle,desc,price,img}
    currentItem: null

};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_PRODUCTS":
            return { ...state, products: payload }

        default:
            return state;
    }
}
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case "SELECTED_PRODUCT": return { ...state, ...payload }

        case "REMOVE_SELECTED_PRODUCT": return {}

        default: return state;

    }

}
export const shopReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = state.products.find((prod) => prod.id === action.payload.id);
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, {
                    ...item, qty: 1
                }]
            }
        case "REMOVE_FROM_CART": return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
        case "ADJUST_QTY": return {
            ...state,
            cart: state.cart.map((item) => item.id === action.payload.id ?
                { ...item, qty: action.payload.qty } : item)
        }
        case "LOAD_CURRENT_ITEM": return {
            ...state,
            currentItem: action.payload
        }
        default: return state
    }
}