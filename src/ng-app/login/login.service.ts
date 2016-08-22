import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Login} from './login';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
  constructor(private http: Http){}

  getCars(){
      //return this.http.get('app/data/cv.json')
      //.map(response => <User>function(r){ return r;  }(response.json()));
  }
}
