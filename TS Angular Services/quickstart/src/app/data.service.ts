import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Data} from './data';

@Injectable()
export class DataService{

  private productsURL = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: Http){}

  getData():Promise<MyDataObject>{

    return this.http.get(this.productsURL)
              .toPromise()
              .then(response=>response.json() as MyDataObject)
              .catch(this.handleError);
  }
}
