import {provideRouter, RouterConfig} from '@angular/router';
import {UserComponent} from './user/user.component';
import {CarComponent} from './car/car.component';
import {LoginComponent} from './login/login.component';

const routes: RouterConfig= [
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'car', component: CarComponent},
  {path: 'car/:id', component: CarComponent},
  {path: '**', component: LoginComponent} //404
];

export const appRouterProviders = [ provideRouter(routes) ];
