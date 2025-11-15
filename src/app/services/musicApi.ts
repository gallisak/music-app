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
    cover: string;
  };
  artist: {
    name: string;
  };
}

export interface DeezerAlbumsTracksResponse {
  data: AlbumTracks[];
}

export interface Artist {
  id: number;
  name: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
}

export interface DeezerArtistsResponse {
  data: Artist[];
}

export const musicApi = createApi({
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
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

    getChartArtists: builder.query<DeezerArtistsResponse, void>({
      query: () => "chart/0/artists",
    }),

    getArtistTracks: builder.query<DeezerAlbumsTracksResponse, number>({
      query: (artistId) => `artist/${artistId}/top`,
    }),

    getArtistDetails: builder.query<Artist, number>({
      query: (artistId) => `artist/${artistId}`,
    }),
  }),
});

export const {
  useGetChartAlbumsQuery,
  useGetAlbumTracksQuery,
  useGetAlbumDetailsQuery,
  useGetChartArtistsQuery,
  useGetArtistTracksQuery,
  useGetArtistDetailsQuery,
} = musicApi;
