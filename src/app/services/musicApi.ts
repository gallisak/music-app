import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Track {
  id: number;
  title: string;
  artist: {
    name: string;
  };
  album: {
    cover_small: string;
  };

  link: string;
  preview: string;
}
interface DeezerChartResponse {
  data: Track[];
}
export interface Album {
  id: number;
  title: string;
  cover_big: string;
  cover_medium: string;
  artist: {
    name: string;
  };
}
interface DeezerAlbumsResponse {
  data: Album[];
}

export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://corsproxy.io/?https://api.deezer.com/",
  }),

  endpoints: (builder) => ({
    getChartTracks: builder.query<DeezerChartResponse, void>({
      query: () => "chart/0/tracks",
    }),
    getChartAlbums: builder.query<DeezerAlbumsResponse, void>({
      query: () => "chart/0/albums",
    }),
    getAlbumTracks: builder.query<DeezerChartResponse, number>({
      query: (albumId) => `album/${albumId}/tracks`,
    }),

    getAlbumDetails: builder.query<Album, number>({
      query: (albumId) => `album/${albumId}`,
    }),
  }),
});

export const {
  useGetChartTracksQuery,
  useGetChartAlbumsQuery,
  useGetAlbumTracksQuery,
  useGetAlbumDetailsQuery,
} = musicApi;
