import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {Login} from './login';
import {LoginService} from './login.service';
import {Global} from '../global';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  directives: [NgClass],
  providers: [LoginService, Global]
})
export class LoginComponent {
  private title = 'Logg inn';
  private username: string = '';
  private password: string = '';
  private user = {};
  private creds = {};
  private loggedin: boolean = false;


  constructor(
    private router: Router, private loginService: LoginService,
    private global: Global
  ){}

  ngOnInit(): void{
    //Moving the user to the root page, incase of invalid URLs
    this.router.navigate(['/']);
  }
  login(): void{
    this.user = this.loginService.login(this.username, this.password)
      .subscribe(
        result => {
          this.creds = this.validate(result)
          this.global.setUsername(this.username)
          this.global.setPassword(this.password)
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
