
import { createSlice } from '@reduxjs/toolkit';


const initState ={
    items:[],
};

const cartSlice = createSlice({
    name:"cart",
    initialState:initState,
    reducers:{

        clearCart:(state)=>{
            state.items = [];
        },

        addItem:(state,action)=>{
            const item = action.payload;
            //console.log("SLICER");
            console.log(item);
            if (item && item.quantity > 0) {
                const index = state.items.findIndex(it => it.product.id === item.product.id);
                const newItems = [...state.items];
                if (index !== -1) {
                    newItems[index] = { ...item };
                    state.items= newItems;
                } else {
                    newItems.push({ ...item });
                }
                state.items= newItems; 
            } else {
                const items = state.items.filter(it => it.product.id !== item.product.id);
                state.items= items;
            }
        },
        updateItem: (state,action) => {
            const quantity = action.payload.quantity;
            const product = action.payload.product;
            //console.log("SLICER PAYLOD");
            console.log(action.payload);
            if (quantity === 0) {
                const items = state.items.filter(it => it.product.id !== product.id);
                state.items= items;
            } else {
                const index = state.items.findIndex(it => it.product.id === product.id);
                const newItems = [...state.items];
                if (index !== -1) {
                    
                    const item = { ...state.items[index], quantity };
                    newItems[index] = { ...item };
                    state.items= newItems;
                } else
                
                state.items=newItems;
            }
        }
    }
});

export const { clearCart,addItem,updateItem } = cartSlice.actions;

export default cartSlice.reducer;
