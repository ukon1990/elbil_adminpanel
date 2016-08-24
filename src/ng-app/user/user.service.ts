import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
  constructor(private http: Http){}

  getUsers(){
      //return this.http.get('app/data/cv.json')
      //.map(response => <User>function(r){ return r;  }(response.json()));
  }
}
