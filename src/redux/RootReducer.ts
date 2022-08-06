import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RootState {
  index: number
}

export const initialState = {
  index: 0
} as RootState

export const RootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
      addIndex: (state, action: PayloadAction<number>) => {
        state.index += action.payload;
      }
    },
})

export const { addIndex } = RootSlice.actions

export const StakingSelector = (state: any) => state.RootSlice

export default RootSlice.reducer