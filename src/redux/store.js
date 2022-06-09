import { configureStore } from '@reduxjs/toolkit'
import { configureSlice } from 'src/features/configure/configureSlice'


export const store = configureStore({
    reducer: {
        configure: configureSlice.reducer
    }
})