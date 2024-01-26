import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Asset } from "../types/types"

interface AssetsState {
    list: Asset[]
}

const initialState: AssetsState = {
    list: []
}

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        addAsset: (state, action: PayloadAction<Asset>) => {
            const existingAsset = state.list.find((asset) => asset.coin?.id === action.payload.coin?.id);
            if (existingAsset) {
                if (typeof action.payload.amount === 'number' && typeof existingAsset.amount === 'number') {
                    existingAsset.amount += action.payload.amount;
                } else {
                    console.error('Amount is not a number');
                }
            } else {
                state.list.push(action.payload);
            }
        },
        removeAsset: (state, action: PayloadAction<string>) => {
            const newAssets = state.list.filter((asset) => asset.coin?.id !== action.payload)
            state.list = newAssets
        }
    }
})

export const assetsReducer = assetsSlice.reducer
export const {addAsset, removeAsset} = assetsSlice.actions