import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  styles: [`
    table{
      background: green;
    }
    table td, table th{
      padding: 0.5em;
    }
  `],
  directives: [NgClass],
  providers: [UserService]
})
export class UserComponent {
  title = 'Brukerpanel';
  users = [
    {'user_id': '13fda124asd', 'username': 'jonas'},
    {'user_id': '13fda124sdd', 'username': 'hansob'}
  ];


  constructor(private router: Router, private userService: UserService){}

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
