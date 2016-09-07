import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {Car} from './car';
import {CarService} from './car.service';
import {Global} from '../global';

@Component({
  moduleId: module.id,
  selector: 'car',
  templateUrl: 'car.component.html',
  styleUrls: ['car.component.css'],
  directives: [NgClass],
  providers: [CarService, Global]
})
export class CarComponent {
  title = 'Bilpanel';
  //Selection
  carName: string = '';
  selectedCar = {'conns': []};
  selectedCarIndex: number;
  selectedConn: string = '';
  //For the dialog window
  carDialogName: string = '';
  carDialog: boolean = false;
  //Lists
  cars_obj = {};
  response = {};
  cars = [];
  connTypes = {
    '0' : 'Unspecified',
    '14' : 'Schuko',
    '22' : 'Danish (Section 107-2-D1)',
    '29' : 'Tesla Connector Roadster',
    '30' : 'CHAdeMO',
    '31' : 'Type 1',
    '32' : 'Type 2',
    '60' : 'Type1/Type2',
    '34' : 'Blue industrial 3-pin',
    '35' : 'Blue industrial 4-pin',
    '36' : 'Red industrial 5-pin',
    '38' : 'Marechal',
    '39' : 'CCS/Combo',
    '40' : 'Tesla Connector Model',
    '41' : 'Combo + CHAdeMO',
    '42' : 'CHAdeMO + Type 2',
    '43' : 'CHAdeMO + Combo + AC-Type2',
    '50' : 'Type 2 + Schuko',
    '52' : 'Type 2 + Danish (Section 107-2-D1)'
  };

  constructor(
    private router: Router, private carService: CarService,
    private global: Global){}

  ngOnInit(): void{
    this.getCars();
  }
  //Checks if a car matches the search string
  contains(text: string): boolean{
    if(text.toLowerCase().indexOf(this.carName.toLowerCase()) > -1 || this.carName.length === 0){
      return true;
    }else{
      return false;
    }
  }
  save(): void{
    let obj: string;
    //Adding any car changes to the DB
    for(let car in this.cars){
      obj = JSON.stringify(this.cars[car]);
      this.cars_obj = this.carService.updateCar(
        this.global.getUsername(), this.global.getPassword(),
        this.cars[car].model, obj)
        .subscribe(
          cars => {
            this.cars = cars.data
          },
          error => console.log(error)
        );
      console.log(this.cars[car]);
    }
  }
  //Function for removing connectors from a car model
  removeConnector(conn: number): void{
    this.selectedCar.conns.splice(conn, 1);
    this.cars[this.selectedCarIndex].conns.splice(conn, 0);
  }
  addConnector(conn: string): void{
    this.selectedCar.conns.push(conn);
  }
  //Selecting a car from the list
  selectCar(car, index: number): void{
    this.selectedCar = car;
    this.selectedCarIndex = index;
  }
  //Get the number of connectors
  getNumOfConns(): number{
    return this.selectedCar.conns.length;
  }
  openDialog(){
    this.carDialog = !this.carDialog;
  }
  addCar(): void{
    this.openDialog();
    this.cars.push({'model': this.carDialogName, 'conns': []});
    this.cars_obj = this.carService.addCar(
      this.global.getUsername(), this.global.getPassword(),
      this.carDialogName)
      .subscribe(
        cars => {
          this.cars = cars.data
        },
        error => console.log(error)
      );
  }
  updateCar(): void{
    console.log('updated!');
  }
  getConnKeys(){
    let list = [];
    for (let x in this.connTypes) {
     list.push(x);
    }
    return list;
  }
  getCars(): void{
    this.cars_obj = this.carService.getCars()
      .subscribe(
        cars => {
          this.cars = cars.data
        },
        error => console.log(error)
      );
  }
}
