import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "./services/musicApi";

import PlayerReducer from "./features/player/playerSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    player: PlayerReducer,
    user: userReducer,

    [musicApi.reducerPath]: musicApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
