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
  cars = [
    { "model":"Nissan Leaf", "conns":["14", "50", "31", "60", "32", "42", "52", "30", "41", "43"] },
    { "model":"BMW i3", "conns": ["14", "50", "32", "60", "42", "52", "39", "41"] },
    { "model":"Buddy", "conns": ["14", "50"] },
    { "model":"Citroën Berlingo", "conns": ["14", "50", "31", "60", "32", "42", "52", "30", "41", "43"] },
    { "model":"Citroën C-ZERO", "conns":["14", "50", "31", "60", "32", "42", "52", "30", "41", "43"] },
    { "model":"Ford Focus Electric", "conns":["14", "50", "31", "60", "32", "42", "52"] },
    { "model":"Kia Soul Electric", "conns":["14", "50", "31", "60", "32", "42", "52", "30", "41", "43"] },
    { "model":"Mercedes B-klasse ED", "conns":["14", "50", "32", "60", "42", "52"] },
    { "model":"Mitsubishi i-MIEV", "conns":["14", "50", "31", "60", "32", "42", "52", "30", "41", "43"] },
    { "model":"Nissan e-NV200/Evalia", "conns":["14", "50", "31", "60", "32", "42", "52", "30", "41", "43"] },
    { "model":"Peugeot iOn", "conns":["14", "50", "31", "60", "32", "42", "52", "30", "41", "43"] },
    { "model":"Peugeot Partner", "conns":["14", "50", "31", "60", "32", "42", "52", "30", "41", "43"] },
    { "model":"Renault Kangoo ZE", "conns":["14", "50", "31", "60", "32", "42", "52"] },
    { "model":"Renault Twizy", "conns":["14", "50"] },
    { "model":"Renault Zoe", "conns":["14", "50", "32", "60", "42", "52"] },
    { "model":"Reva", "conns":["14", "50"] },
    { "model":"Tesla Model S", "conns":["14", "50", "32", "60", "42", "52", "34", "36", "40"] },
    { "model":"Tesla Roadster", "conns":["14", "50", "29"] },
    { "model":"Think", "conns":["14", "50"] },
    { "model":"VW e-Golf", "conns":["14", "50", "32", "60", "42", "52", "39", "41"] },
    { "model":"VW e-up!", "conns":["14", "50", "31", "60", "32", "42", "52"] }
  ];
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
  //Checks if a car matches the search string
  contains(text: string): boolean{
    if(text.toLowerCase().indexOf(this.carName.toLowerCase()) > -1 || this.carName.length === 0){
      return true;
    }else{
      return false;
    }
  }
  save(): void{
    console.log('saved changes');
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
  }
  getConnKeys(){
    let list = [];
    for (let x in this.connTypes) {
     list.push(x);
    }
    return list;
  }
}
