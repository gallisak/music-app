import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ActiveTrack {
  id: number;
  title: string;
  preview: string;
  artistName: string;
  coverUrl: string;
}

interface PlayerState {
  currentTrack: ActiveTrack | null;
  isPlaying: boolean;
  history: ActiveTrack[];
}

const savedUserJSON = localStorage.getItem("currentUser");
const savedUser = savedUserJSON ? JSON.parse(savedUserJSON) : null;

const historyKey = savedUser ? `history_${savedUser.email}` : null;
const savedHistory = historyKey ? localStorage.getItem(historyKey) : null;

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  history: savedHistory ? JSON.parse(savedHistory) : [],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    setCurrentTrack: (state, action: PayloadAction<ActiveTrack>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;

      state.history = state.history.filter(
        (track) => track.id !== action.payload.id
      );
      state.history.unshift(action.payload);

      if (state.history.length > 20) {
        state.history.pop();
      }

      const currentUserJSON = localStorage.getItem("currentUser");
      if (currentUserJSON) {
        const currentUser = JSON.parse(currentUserJSON);
        const userHistoryKey = `history_${currentUser.email}`;
        localStorage.setItem(userHistoryKey, JSON.stringify(state.history));
      }
    },

    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },

    loadUserHistory: (state, action: PayloadAction<string>) => {
      const userHistoryKey = `history_${action.payload}`;
      const userHistory = localStorage.getItem(userHistoryKey);

      if (userHistory) {
        state.history = JSON.parse(userHistory);
      } else {
        state.history = [];
      }
    },

    clearPlayerState: (state) => {
      state.history = [];
      state.currentTrack = null;
      state.isPlaying = false;
    },
  },
});

export const {
  setCurrentTrack,
  play,
  pause,
  loadUserHistory,
  clearPlayerState,
} = playerSlice.actions;

export default playerSlice.reducer;
