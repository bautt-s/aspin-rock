import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    view: 'individual' | 'institutional' | 'advisor',
    navState: undefined | 'corporate' | '404'
}

const initialState: CounterState = {
    view: 'individual',
    navState: undefined
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeView: (state, action: PayloadAction<'individual' | 'institutional' | 'advisor'>) => {
            state.view = action.payload
        },

        changeNav: (state, action: PayloadAction<undefined | 'corporate' | '404'>) => {
            state.navState = action.payload
        },
    },
})

export const { changeView, changeNav } = appSlice.actions

export default appSlice.reducer