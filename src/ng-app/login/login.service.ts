import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Login} from './login';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
  constructor(private http: Http){}

  login(username: string, password: string){
    var headers = new Headers();
    headers.append('content-type', 'application/json');

    console.log('yo');
    return this.http.post(
      'http://localhost:8888/elCharge_web/api/AdminLogin.php',
      {username: username, password: password},
      {headers:headers}
    ).map(response => <Login>function(r){ console.log(r); return r;  }(response));
  }
}
