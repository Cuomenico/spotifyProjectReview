import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Artist } from '../Class/artist';

@Injectable()
export class SearchService {
  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  private accessToken = 'BQAVqAcrBKwXZLBkAMPEOpJ_Qgc1H3r-uv9Fg-Dfeqq6ui-AL6rDw9dEisngjMxyPnoLFTErfW6FT8IECs1C68rpLc0gMtEN1jU_ouZ80-Y6qkTOPqGS4DRUYev9VUfT4DNpSB17Q5f3FezbPFjYvg9Qs1_iiYg';
  private headers = new Headers({'Authorization': 'Bearer ' + this.accessToken});

  constructor(private _http: Http) {}

  searchMusic(str: string, type= 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str +
    '&type=' + type + '&limit=20';

    return this._http.get(this.searchUrl, {headers: this.headers})
    .map( res => res.json());
  }

  getArtist( id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;

    return this._http.get(this.artistUrl,  {headers: this.headers})
    .map(res => res.json());
  }

  getAlbum(artistId: string) {
    this.albumUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';

    return this._http.get(this.albumUrl, {headers: this.headers})
    .map(res => res.json());
  }
}
