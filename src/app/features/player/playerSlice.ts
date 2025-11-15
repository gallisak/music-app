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
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 0.8,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    setCurrentTrack: (state, action: PayloadAction<ActiveTrack>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
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
