import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  directives: [NgClass],
  providers: [UserService]
})
export class UserComponent {
  title = 'Brukerpanel';
  users = {};
  //For resetting the password
  password: string;
  passwordMatch : string;

  constructor(private router: Router, private userService: UserService){}

  ngOnInit(): void{
    this.users = this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users
        },
        error => console.log(error)
      );
  }
  newPassword(){
    if(this.password === this.passwordMatch){
      console.log('Success!');
    }
  }

  //TODO: Only push changes for the users who there actually is a change for
}
