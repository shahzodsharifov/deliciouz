import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface ShopItem {
    selectedFood:string ,
    foodCount: number
}

export interface ShopItems {
    items: ShopItem[]
}


const initialState: ShopItems = {
    items: [],
};


export const itemsSlice = createSlice({
    name: "shopItems",
    initialState,
    reducers: {


        setItems(state, action) {
            state.items.push(action.payload)
        },

        updateCount(state, action) {
            state.items[action.payload].foodCount++
        },

        decreaseCount(state,action) {
            state.items[action.payload].foodCount--
        },

        deleteItem(state, action) {
            state.items.splice(action.payload,1)
        }






    
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.shopItems,
            };
        },
    },
});


export const { setItems, updateCount,decreaseCount,deleteItem} = itemsSlice.actions;

export const selectItems = (state: AppState) => state.shopItems.items

export default itemsSlice.reducer;