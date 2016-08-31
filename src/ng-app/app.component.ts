import { Component, ViewEncapsulation } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {NgClass, Location} from '@angular/common';
import {LoginService} from './login/login.service'
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NgClass, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, LoginService]
})
export class AppComponent {
  title = 'Administrator panel';
  isMenuToggeled: boolean = false;

  constructor(
    private router: Router, private location: Location, private loginService: LoginService
  ){}

  menuToggle(){
    this.isMenuToggeled = !this.isMenuToggeled;
    console.log(this.isMenuToggeled);
  }

  previousPage(){
    this.location.back();
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
