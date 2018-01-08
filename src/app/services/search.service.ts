import * as ApiConst from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { artist } from '../Class/artist';
@Injectable()
export class SearchService {
  private accessToken = 'BQAVqAcrBKwXZLBkAMPEOpJ_Qgc1H3r-uv9Fg-Dfeqq6ui-AL6rDw9dEisngjMxyPnoLFTErfW6FT8IECs1C68rpLc0gMtEN1jU_ouZ80-Y6qkTOPqGS4DRUYev9VUfT4DNpSB17Q5f3FezbPFjYvg9Qs1_iiYg';
  private headers = new Headers({'Authorization': 'Bearer ' + this.accessToken});
  private _apiConst = ApiConst;
  constructor(private _http: Http) {  }

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
