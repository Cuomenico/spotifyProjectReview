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
  private accessToken = 'BQA85CF9uY9nblvRpSoZqQ50djKpTodqCMXcYLbvv8WyPWxdrmxRwllPdhst2eeXjf86y2CI1tx9s_-QlON4oz7j05Bp_14V6dDgExNwM1tctZfyJsoiFMem8GNyhsoZFrNDZBmWUtYfX23bdvOkz9LEpt7hnuY';
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
