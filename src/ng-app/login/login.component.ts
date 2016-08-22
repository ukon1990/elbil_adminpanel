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
  users = {};


  constructor(private router: Router, private loginService: LoginService){}

  ngOnInit(): void{

    /*
    this.users = this.userService.get()
      .subscribe(
        cv => {
          this.cv = cv
          this.skills = cv.skills
        },
        error => console.log(error)
      );
    this.router.navigate(['/about']);*/
  }
}
