import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Login} from './login';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
  constructor(private http: Http){}

  login(username: string, password: string){
    return this.http.get(
      'http://localhost:8888/elCharge_web/api/AdminLogin.php?username='
      + username + '&password=' + password
    ).map(response => <Login>function(r){ console.log(r); return r;  }(response));
  }
}
