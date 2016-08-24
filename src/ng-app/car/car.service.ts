import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Car} from './car';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService{
  constructor(private http: Http){}

  getCars(){
      //return this.http.get('app/data/cv.json')
      //.map(response => <User>function(r){ return r;  }(response.json()));
  }
}
