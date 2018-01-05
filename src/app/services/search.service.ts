import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Artist } from '../Class/artist';

@Injectable()
export class SearchService {
  private searchUrl: string;
  private artistUrl: string;
  private accessToken = 'BQCIVyUA9msjysA3CxtRdRNuuOChHltV6dh76ptt1J4EIa8xZKOGatmC6no_kn7bmGHJjgYO50fAC0AeycH4ZRmftXH3Yup3uDxWHGgRi4_fHkNinrWXuAo9zfVsVpHkvKlMhE2viObSk-jc5jiIgzXg4DApOw0';
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
}
