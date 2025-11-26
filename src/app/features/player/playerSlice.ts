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
  volume: number;
  history: ActiveTrack[];
}

const savedHistory = localStorage.getItem("musicHistory");

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 0.8,
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
      localStorage.setItem("musicHistory", JSON.stringify(state.history));
    },
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { setCurrentTrack, play, pause } = playerSlice.actions;

export default playerSlice.reducer;
