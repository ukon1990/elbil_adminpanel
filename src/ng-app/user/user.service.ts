import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
  constructor(private http: Http){}

  getUsers(){
      return this.http.get('http://localhost:8888/elCharge_web/api/GetUsers.php')//https://elbil.hiof.no/api/GetUsers.php
      .map(response => <User>function(r){ console.log(r); return r;  }(response.json()));
  }
  deleteUser(userId: string){
      return this.http.get('http://localhost:8888/elCharge_web/api/DeleteUser.php?user_id=' + userId)//https://elbil.hiof.no/api/GetUsers.php
      .map(response => <User>function(r){ console.log(r); return r;  }(response.json()));
  }
}
