import { Artist } from './../../environments/environment';

import { BaseUrl, Album, Search, Albums, AlbumsTrack, ArtistAlbums } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { artist } from '../Class/artist';

@Injectable()
export class SearchService {

  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  private accessToken = 'BQAVqAcrBKwXZLBkAMPEOpJ_Qgc1H3r-uv9Fg-Dfeqq6ui-AL6rDw9dEisngjMxyPnoLFTErfW6FT8IECs1C68rpLc0gMtEN1jU_ouZ80-Y6qkTOPqGS4DRUYev9VUfT4DNpSB17Q5f3FezbPFjYvg9Qs1_iiYg';
  private headers = new Headers({'Authorization': 'Bearer ' + this.accessToken});

  constructor(private _http: Http) {

  }

  searchMusic(str: string, type= 'artist') {

    return this._http.get(BaseUrl.UrlStart + Search.UrlStart + str + '&type=' + type + '&limit=20', {headers: this.headers})
    .map( res => res.json());
  }

  getArtist( id: string) {
    this.artistUrl = BaseUrl.UrlStart + Artist.UrlStart + id;

    return this._http.get(this.artistUrl,  {headers: this.headers})
    .map(res => res.json());
  }

  getAlbum(artistId: string) {
    this.albumUrl = BaseUrl.UrlStart + ArtistAlbums.UrlStart + artistId + ArtistAlbums.UrlEnd;

    return this._http.get(this.albumUrl, {headers: this.headers})
    .map(res => res.json());
  }
}
