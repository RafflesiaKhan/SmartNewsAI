import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';

// Add the RxJS Observable operators.

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class NewsserviceService {
  private url = 'https://newsapi.org/v1/articles?apiKey=59cbdf1b33154c09bfbb55ccf1cc86c8&language=en';
  constructor(private http: Http) { }


  getNewsbyType(type) {
    switch (type) {
      case 'sport':
        this.url += 'source=espn&category=sport';
        break;
      case 'entertainment':
        this.url += 'source=mtv-news&category=entertainment';
        break;
      case 'business':
        this.url += 'source=financial-times&category=business';
        break;
    };
     console.log(this.url);
    return this.http.get(this.url)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('hello' + JSON.stringify(res.json()));
    return res.json();
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
