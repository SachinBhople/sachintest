import { createSlice } from "@reduxjs/toolkit";
import { todoApi } from "./todoApi";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        .addMatcher(todoApi.endpoints.getTodos.matchPending, (state, { payload }) => {
            state.loading = true
        })
        .addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, { payload }) => {
            state.loading = false
            state.alltodos = payload
        })
        .addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })


})

export default todoSlice.reducer