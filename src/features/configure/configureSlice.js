import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { postNextAction } from "./configureApi";


const initialState = {
    loading: true,
    currentStep: 0
}

export const nextActionAsync = createAsyncThunk(
    "configure/nextActionAsync",
    async (values) => {
        const status = postNextAction(values)
        return status
    }
)

export const configureSlice = createSlice({
    name: "configure",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(nextActionAsync.fulfilled, (state, action) => {
                state.loading = true
                state.currentStep = state.currentStep + 1
            })
            .addMatcher(isAnyOf(
                nextActionAsync.pending
            ), (state) => {
                state.loading = true
            })
    }
})

export const { setLoading } = configureSlice.actions