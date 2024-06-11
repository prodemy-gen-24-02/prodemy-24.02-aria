export const UPDATE_CART_ITEM = 'cart/UPDATE_CART_ITEM';
export const UPDATE_CART_ITEM_QUANTITY = 'cart/UPDATE_CART_ITEM_QUANTITY';
export const CLEAR_CART = 'cart/CLEAR_CART';
export const GET_TOTAL = 'cart/GET_TOTAL';
//types

/**
 * 
 * item: ICartItem = {
 *  product,
 *  quantity: number,
 * }
 * 
 */
export const updateCartItem = item => ({
    type: UPDATE_CART_ITEM,
    item
})

export const updateCartItemQuantity = (product, quantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    product,
    quantity
})

export const clearCart = () => ({
    type: CLEAR_CART,
})

export const getCartTotal = () => ({
    type: GET_TOTAL,
})