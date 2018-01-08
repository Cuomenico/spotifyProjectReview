import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  public obj;
  constructor (private _http: Http){

    this.getJSON().subscribe(data => this.obj=data);
  }

  public getJSON(): Observable<any> {
    return this._http.get("./Constants/constants.json")
                    .map((res:any) => res.json());

}
}


