import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "./services/musicApi";

import PlayerReducer from "./features/player/playerSlice";
import userReducer from "./features/user/userSlice";
import likedSongsReducer from "./features/library/likedSongsSlice";
import playlistReducer from "./features/playlist/playlistSlice";

export const store = configureStore({
  reducer: {
    player: PlayerReducer,
    user: userReducer,
    likedSongs: likedSongsReducer,
    playlists: playlistReducer,

    [musicApi.reducerPath]: musicApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
