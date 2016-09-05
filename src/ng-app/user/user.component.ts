import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {User} from './user';
import {UserService} from './user.service';
import {Global} from '../global';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  directives: [NgClass],
  providers: [UserService, Global]
})
export class UserComponent {
  private title = 'Brukerpanel';
  private users = {};
  //For resetting the password
  private username: string;
  private password: string;
  private passwordMatch : string;
  private placeholder = {};//For use while resetting passwords
  private showNewPasswordForm: boolean = false;

  constructor(
    private router: Router, private userService: UserService,
    private global: Global){
  }

  ngOnInit(): void{
    this.getUsers();
  }
  newPasswordForm(username: string): void{
    this.showNewPasswordForm = !this.showNewPasswordForm;
    this.username = username;
    console.log(this.username);
  }
  newPassword(): void{
    if(this.password === this.passwordMatch){
      this.users = this.userService.newPassword(
        this.global.getUsername(), this.global.getPassword(),
        this.username, this.password, this.passwordMatch
      )
        .subscribe(
          users => {
            this.placeholder = users
          },
          error => console.log(error)
        );
    }else{
      console.log('s');
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
    this.users = this.userService.getUsers(this.global.getUsername(), this.global.getPassword())
      .subscribe(
        users => {
          this.users = users
        },
        error => console.log(error)
      );
  }
}
