import { XHRBackend, Request, XHRConnection, Response, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class MyXHRBackend extends XHRBackend {

  private client_id = '727253ce21524617a8e59a7ddfbd77e4'; // Your client id
  private client_secret = 'd37db95f0e1841bb99e71d77166d8e7'; // Your secret
  private redirect_uri = 'http://localhost:8888/callback/'; // Your redirect uri
  private http : Http;
  private headers = new Headers({ 'Authorization': 'Basic ' + this.client_id + ':' + this.client_secret });
  createConnection(request: Request): XHRConnection {
    let connection: XHRConnection = super.createConnection(request);
    // Before returning the connection we try to catch all possible errors(4XX,5XX and so on)
    connection.response = connection.response.catch(this.processResponse);
    return connection;
  }


  processResponse(response: Response) {
    switch (response.status) {
      case 401:
      console.log(this.http.request);
      this.http.post("https://accounts.spotify.com/api/token", this.headers);
        return "401";
      case 403:
        // You could redirect to forbidden page here
        return "403";
      case 404:
        // You could redirect to 404 page here
        return "404";
      default:
        return Observable.throw(response);
    }
  }

}
