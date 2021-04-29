import { Injectable } from '@angular/core';
import {environment} from './../../environments/environment';

@Injectable()
export class SessionstorageService {

  constructor() { }

  /**
   * saving item to session storage
   * @param name
   * @param data
   */
  save(name, data) {


    sessionStorage.setItem(name, JSON.stringify(data));

  }

  /**
   * getting item from session storage
   * @param name
   * @returns {any}
   */
  get(name) {
    const data: any = JSON.parse(sessionStorage.getItem(name));
    if (!data) {
      return undefined;
    }
    return data ;
  }
}
