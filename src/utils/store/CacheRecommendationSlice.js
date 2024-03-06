import { createSlice } from "@reduxjs/toolkit";

const cacheRecommendationSlice = createSlice({
    name: "cacheRecommendations",
    initialState: {
        cache: {},
    },
    reducers: {
        addToCache: (state, action) => {
            state.cache = {...state.cache, ...action.payload};
        }
    },
});

export const {addToCache} = cacheRecommendationSlice.actions;
export default cacheRecommendationSlice.reducer;