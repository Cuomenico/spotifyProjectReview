// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};
pippo
export const Album = {
    method: "GET",
    UrlStart: "/v1/albums/",
    UrlEnd: "",
    description: "Get an Album concat Url + id"
  }
  export const Albums = {
    method: "GET",
    UrlStart: "/v1/albums",
    UrlEnd: "",
    description: "Get several Albums "
  }
  export const AlbumsTrack = {
    method: "GET",
    UrlStart: "/v1/albums/",
    UrlEnd: "/tracks",
    description: "Get an Album's Tracks concat UrlStart + id + UrlEnd"
  }
  export const Artist = {
    method: "GET",
    UrlStart: "/v1/artists/",
    UrlEnd: "",
    description: "Get an Arstist concat Url + id"
  }
  export const Artists = {
    method: "GET",
    UrlStart: "/v1/artists",
    UrlEnd: "",
    description: "Get several Artist"
  }
  export const ArtistAlbums = {
    method: "GET",
    UrlStart: "/v1/artists/",
    UrlEnd: "/albums",
    description: "Get an Artist's Albums concat UrlStart + id + UrlEnd"
  }
  export const ArtistTopTracks = {
    method: "GET",
    UrlStart: "/v1/artists/",
    UrlEnd: "/top-tracks",
    description: ""
  }
  export const ArtistRelArtist = {
    method: "GET",
    UrlStart: "/v1/artists/",
    UrlEnd: "/related-artists",
    description: ""
  }
  export const Track = {
    method: "GET",
    UrlStart: "/v1/tracks/",
    UrlEnd: "",
    description: ""
  }
  export const Tracks = {
    method: "GET",
    UrlStart: "/v1/tracks",
    UrlEnd: "",
    description: ""
  }
  export const AudioFeature = {
    method: "GET",
    UrlStart: "/v1/audio-features/",
    UrlEnd: "",
    description: ""
  }
  export const AudioFeatures = {
    metho: "GET",
    UrlStar: "/v1/audio-features",
    UrlEn: "",
    descriptio: ""
  }
  export const AudioAnalysis = {
    method: "GET",
    UrlStart: "/v1/audio-analysis/",
    UrlEnd: "",
    description: ""
  }
  export const Search = {
    method: "GET",
    UrlStart: "/v1/search/?q=",
    UrlEnd: "",
    description: ""
  }
  export const BaseUrl = {
    method: "",
    UrlStart: "https://api.spotify.com",
    UrlEnd: "",
    description: ""
  }
