import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {Login} from './login';
import {LoginService} from './login.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  directives: [NgClass],
  providers: [LoginService]
})
export class LoginComponent {
  title = 'Logg inn';
  username: string = '';
  password: string = '';
  user = {};
  creds = {};
  loggedin: boolean = false;


  constructor(private router: Router, private loginService: LoginService){}

  ngOnInit(): void{
    //Moving the user to the root page, incase of invalid URLs
    this.router.navigate(['/']);
  }
  login(): void{
    this.user = this.loginService.login(this.username, this.password)
      .subscribe(
        result => {
          this.creds = this.validate(result)
        },
        error => console.log(error)
      );
  }

  validate(v){
    if(v.loggedIn){
        this.router.navigate(['/user']);
    }
    return v;
  }
}
