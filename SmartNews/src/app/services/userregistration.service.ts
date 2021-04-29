import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class UserregistrationService {

  url = '/smartnews/';
  constructor(private http: Http) { }


  get(username){
    return this.http.get(this.url + username)
      .map(this.extractData);
  }

  post(id, data) {

    this.get(id)
      .subscribe(
        response => {

          if(response)
          {

            delete response['_id'];
            delete response['_rev'];
            console.log(JSON.stringify(response));
            response['mypreference']= data['mypreference'];
            //const one = JSON.parse(response).concat(JSON.parse(data));
           // console.log(JSON.stringify(one));
            //const value = JSON.stringify(response).concat(',').concat(JSON.stringify(data));
            return this.http.post(this.url + id, response)
              .map(this.extractData);
          }
        },
        error => {

        });
  }
  put(data) {
    console.log(JSON.stringify(data));
    const id = data.userName;
    return this.http.put(this.url + id, data)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
