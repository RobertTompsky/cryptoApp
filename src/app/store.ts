import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../features/crypto.api";
import { assetsReducer } from "../features/assetsSlice";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        assets: assetsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cryptoApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch