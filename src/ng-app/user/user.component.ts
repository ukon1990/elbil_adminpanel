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
  private title = 'Brukerpanel';
  private users = {};
  //For resetting the password
  private password: string;
  private passwordMatch : string;

  constructor(private router: Router, private userService: UserService){

  }

  ngOnInit(): void{
    this.getUsers();
  }
  newPassword(): void{
    if(this.password === this.passwordMatch){
      console.log('Success!');
    }
  }
  deleteUser(userId: string, index: number): void{
    this.userService.deleteUser(userId)
      .subscribe(
        users => {
          this.users = users
        },
        error => console.log(error)
      );

    this.getUsers();
  }

  getUsers(): void{
    this.users = this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users
        },
        error => console.log(error)
      );
  }
}
