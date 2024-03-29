import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cacheReducer from "./CacheRecommendationSlice";
import liveChatReducer from "./liveChatSlice";

const store = configureStore({
    reducer: {
        app: appReducer,
        cacheRecommendations: cacheReducer,
        liveChat: liveChatReducer,
    },
})

export default store;