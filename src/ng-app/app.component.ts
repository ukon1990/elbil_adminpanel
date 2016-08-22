import { Component, ViewEncapsulation } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {NgClass} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NgClass, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'Administrator panel';
  isMenuToggeled: boolean = false;

  constructor(private router: Router){}

  menuToggle(){
    this.isMenuToggeled = !this.isMenuToggeled;
    console.log(this.isMenuToggeled);
  }
}
