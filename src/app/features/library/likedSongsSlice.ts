import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ActiveTrack } from "../player/playerSlice";

interface LikedSongState {
  likedTracks: ActiveTrack[];
}

const initialState: LikedSongState = {
  likedTracks: [],
};

export const likedSongsSlice = createSlice({
  name: "likedSongs",
  initialState,

  reducers: {
    toggleLike: (state, action: PayloadAction<ActiveTrack>) => {
      const track = action.payload;

      const index = state.likedTracks.findIndex((t) => t.id === track.id);

      if (index !== -1) {
        state.likedTracks.splice(index, 1);
      } else {
        state.likedTracks.unshift(track);
      }

      const currentUserJSON = localStorage.getItem("currentUser");
      if (currentUserJSON) {
        const currentUser = JSON.parse(currentUserJSON);
        const key = `likes_${currentUser.email}`;
        localStorage.setItem(key, JSON.stringify(state.likedTracks));
      }
    },

    loadUserLikes: (state, action: PayloadAction<string>) => {
      const email = action.payload;
      const key = `likes_${email}`;
      const savedLikes = localStorage.getItem(key);

      if (savedLikes) {
        state.likedTracks = JSON.parse(savedLikes);
      } else {
        state.likedTracks = [];
      }
    },

    clearLikes: (state) => {
      state.likedTracks = [];
    },
  },
});

export const { toggleLike, loadUserLikes, clearLikes } =
  likedSongsSlice.actions;
export default likedSongsSlice.reducer;
