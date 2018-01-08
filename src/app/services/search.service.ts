import { MyXHRBackend } from './auth.service';
import { SpotifyConfig } from 'angular2-spotify';
import * as ApiConst from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { artist } from '../Class/artist';
@Injectable()
export class SearchService {
  private accessToken = 'QALAKJMfgdFCOTq9InOHulBQQV_dbkNGm-68xxv_cuINsJ6MWgJS3voTuLEbOj2wDlGrq1Gi9BzKMPc1gQ4TV3YSO5gIM4fxoXJNHwD-acpuWkcIQRvDPllP-_LycuLebHukvOuCExgf6qs161SXVTUH8lQoyoE_GpFwfZgkBpG4AVGMg';
  private headers = new Headers({'Authorization': 'Bearer ' + this.accessToken});
  private _apiConst = ApiConst;
  constructor(private _http: Http) {

   }

  searchMusic(str: string, type= 'artist') {
    return this._http.get(this._apiConst.BaseUrl.UrlStart + this._apiConst.Search.UrlStart + str + '&type=' + type + '&limit=20', {headers: this.headers})
    .map( res => res.json());
  }

  getArtist( id: string) {
    return this._http.get(this._apiConst.BaseUrl.UrlStart + this._apiConst.Artist.UrlStart + id,  {headers: this.headers})
    .map(res => res.json());
  }

  getAlbum(artistId: string) {
    return this._http.get(this._apiConst.BaseUrl.UrlStart + this._apiConst.ArtistAlbums.UrlStart + artistId + this._apiConst.ArtistAlbums.UrlEnd, {headers: this.headers})
    .map(res => res.json());
  }
}
