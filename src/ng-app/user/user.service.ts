import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
  constructor(private http: Http){}

  getUsers(){
      return this.http.get('http://localhost/elCharge_web/api/GetUsers.php')
      .map(response => <User>function(r){ console.log(r); return r;  }(response.json()));
  }
}
