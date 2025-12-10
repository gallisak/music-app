import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Playlist {
  id: string;
  name: string;
  tracks: any[];
  createdAt: string;
}

interface PlaylistState {
  playlists: Playlist[];
}

const savedPlaylists = localStorage.getItem("playlists");
const initialState: PlaylistState = {
  playlists: savedPlaylists ? JSON.parse(savedPlaylists) : [],
};

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    createPlaylist: (state, action: PayloadAction<string>) => {
      const newPlaylist: Playlist = {
        id: Date.now().toString(),
        name: action.payload,
        tracks: [],
        createdAt: new Date().toISOString(),
      };
      state.playlists.push(newPlaylist);
      localStorage.setItem("playlists", JSON.stringify(state.playlists));
    },

    addTrackToPlaylist: (
      state,
      action: PayloadAction<{ playlistId: string; track: any }>
    ) => {
      const { playlistId, track } = action.payload;
      const playlist = state.playlists.find((p) => p.id === playlistId);

      if (playlist) {
        const exists = playlist.tracks.some((t) => t.id === track.id);
        if (!exists) {
          playlist.tracks.push(track);
          localStorage.setItem("playlists", JSON.stringify(state.playlists));
          alert(`Added to ${playlist.name}!`);
        } else {
          alert("Song is already in this playlist!");
        }
      }
    },

    deletePlaylist: (state, action: PayloadAction<string>) => {
      state.playlists = state.playlists.filter((p) => p.id !== action.payload);
      localStorage.setItem("playlists", JSON.stringify(state.playlists));
    },

    removeTrackFromPlaylist: (
      state,
      action: PayloadAction<{ playlistId: string; trackId: number }>
    ) => {
      const { playlistId, trackId } = action.payload;
      const playlist = state.playlists.find((p) => p.id === playlistId);
      if (playlist) {
        playlist.tracks = playlist.tracks.filter((t) => t.id !== trackId);
        localStorage.setItem("playlists", JSON.stringify(state.playlists));
      }
    },
  },
});

export const {
  createPlaylist,
  addTrackToPlaylist,
  deletePlaylist,
  removeTrackFromPlaylist,
} = playlistSlice.actions;
export default playlistSlice.reducer;
