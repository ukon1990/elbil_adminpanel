import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
  constructor(private http: Http){}

  getUsers(username: string, password: string){
    return this.http.get('https://elbil.hiof.no/api/admin/GetUsers.php?username='
      + username + '&password=' + password)//https://elbil.hiof.no/api/GetUsers.php
      .map(response => <User>function(r){ console.log(r); return r;  }(response.json()));
  }
  deleteUser(userId: string, username: string, password: string){
    return this.http.get('https://elbil.hiof.no/api/admin/DeleteUser.php?user_id=' + userId
      + '&username=' + username + '&password=' + password)//https://elbil.hiof.no/api/GetUsers.php
    .map(response => <User>function(r){ console.log(r); return r;  }(response.json()));
  }
  newPassword(
    adminUsername: string, adminPassword: string,
    username: string, password: string, repassword: string
  ){
    return this.http.get('https://elbil.hiof.no/api/admin/NewPassword.php?adminUsername='
    + adminUsername + '&adminPassword=' + adminPassword
    + '&username=' + username + '&password=' + password  + '&rePassword=' + repassword)//https://elbil.hiof.no/api/GetUsers.php
    .map(response => <User>function(r){ console.log(r); return r;  }(response.json()));
  }
}
