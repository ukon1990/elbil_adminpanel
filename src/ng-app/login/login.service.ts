import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Login} from './login';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
  constructor(private http: Http){}

  isLoggedIn: string = 'false';
  test: string = 's';

  login(username: string, password: string){
    return this.http.get(
      'http://localhost:8888/elCharge_web/api/admin/AdminLogin.php?username='
      + username + '&password=' + password
    ).map(response => <Login>function(r){
      //Checking if there is a valid
      r.loggedIn = r.username === username;
      return r;
    }(response.json()));
  }
  logout(){
    return this.http.get(
      'http://localhost:8888/elCharge_web/api/logout.php'
    ).map(response => <Login>function(r){
      console.log(r);
      return r;
    }(response.json()));
  }
}
