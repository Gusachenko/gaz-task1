import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiDbService {

  constructor(private http: Http) { }

  public getAllData() {
    return this.http.get('https://api.mlab.com/api/1/databases/cloudfirst/collections/towers?apiKey=bkrXAXOr5IwTC3JZ1jLbJ68bIQknSxZE')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: Response | any) {
    console.error(error);
    return Observable.throw(error);
  }

}
