
import {
    CLEAR_CART,
    UPDATE_CART_ITEM,
    UPDATE_CART_ITEM_QUANTITY,
    GET_TOTAL
} from '../action/cartAction';


export const cartReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        
        case CLEAR_CART:
            return { items: [] };

        case UPDATE_CART_ITEM:
            const item = action.item;

            if (item && item.quantity > 0) {
                const index = state.items.findIndex(it => it.product.id === item.product.id);
                const newItems = [...state.items];
                if (index !== -1) {
                    newItems[index] = { ...item };
                    return { ...state, items: newItems };
                } else {
                    newItems.push({ ...item });
                }
                return { ...state, items: newItems };
            } else {
                const items = state.items.filter(it => it.product.id !== item.product.id);
                return { ...state, items };
            }

        case UPDATE_CART_ITEM_QUANTITY:
            const quantity = action.quantity;
            const product = action.product;

            if (quantity === 0) {
                const items = state.items.filter(it => it.product.id !== product.id);
                return { ...state, items };
            } else {
                const index = state.items.findIndex(it => it.product.id === product.id);
                if (index !== -1) {
                    const newItems = [...state.items];
                    const item = { ...state.items[index], quantity };
                    newItems[index] = { ...item };
                    return { ...state, items: newItems };
                } else {
                    
                }
            }
            return state;

        case GET_TOTAL:
            return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
        default:
            return state;
    }
};