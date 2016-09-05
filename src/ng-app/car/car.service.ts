import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Car} from './car';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService{
  constructor(private http: Http){}
  url: string = "http://localhost:8888/elCharge_web/api/";
  //https://elbil.hiof.no/api

  getCars(){
    return this.http.get(this.url + '/GetCars.php')
      .map(response => <Car>function(r){ console.log(r); return r;  }(response.json()));
  }
  deleteCar(username: string, password: string, model: string){
    return this.http.get(this.url + '/admin/AlterCars.php?username='
      + username + '&password=' + password +
    '&action=delete&model=' + model)
      .map(response => <Car>function(r){ console.log(r); return r;  }(response.json()));
  }
  updateCar(username: string, password: string, model: string, json: string){
    return this.http.get(this.url + '/admin/AlterCars.php?username='
      + username + '&password=' + password +
    '&action=update&model=' + model + '&json=' + json)
      .map(response => <Car>function(r){ console.log(r); return r;  }(response.json()));
  }
  addCar(username: string, password: string, model: string){
    return this.http.get(this.url + '/admin/AlterCars.php?username='
      + username + '&password=' + password +
    '&action=add&model=' + model)
      .map(response => <Car>function(r){ console.log(r); return r;  }(response.json()));
  }
}
