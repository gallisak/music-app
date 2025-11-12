import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Album {
  id: number;
  title: string;
  cover_big: string;
  cover_small: string;
}

export interface DeezerAlbumsResponse {
  data: Album[];
}

export interface AlbumTracks {
  id: number;
  title: string;
  preview: string;
  album: {
    cover_small: string;
  };
  artist: {
    name: string;
  };
}

export interface DeezerAlbumsTracksResponse {
  data: AlbumTracks[];
}

export interface Podcast {
  id: number;
  title: string;
  description: string;
  picture_big: string;
}

export interface DeezerPodcastResponse {
  data: Podcast[];
}

export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://corsproxy.io/?https://api.deezer.com/",
  }),
  endpoints: (builder) => ({
    getChartAlbums: builder.query<DeezerAlbumsResponse, void>({
      query: () => "chart/0/albums",
    }),

    getAlbumTracks: builder.query<DeezerAlbumsTracksResponse, number>({
      query: (albumId) => `album/${albumId}/tracks`,
    }),

    getAlbumDetails: builder.query<Album, number>({
      query: (albumId) => `album/${albumId}`,
    }),

    getPodcast: builder.query<DeezerPodcastResponse, void>({
      query: () => "chart/0/podcasts",
    }),
  }),
});

export const {
  useGetChartAlbumsQuery,
  useGetAlbumTracksQuery,
  useGetAlbumDetailsQuery,
  useGetPodcastQuery,
} = musicApi;
