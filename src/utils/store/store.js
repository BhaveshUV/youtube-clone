import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheReducer from "./CacheRecommendationSlice";

const store = configureStore({
    reducer: {
        app: appReducer,
        cacheRecommendations: cacheReducer,
    },
})

export default store;