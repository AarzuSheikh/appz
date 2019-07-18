import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coldcoffee',
  templateUrl: './coldcoffee.component.html',
  styleUrls: ['./coldcoffee.component.css']
})
export class ColdcoffeeComponent implements OnInit {
  public searchText : string;
  public customerData : any;


  constructor() { }

  ngOnInit() {
    this.customerData = [
      {"name": 'Babbu', "Add": 'Sadar', "type":'Chicken'},
      {"name": 'Babbu', "Add": 'Mominpura', "type":'Chicken'},
      {"name": 'Kareem', "Add":  'Sadar', "type":'Chicken'},
      {"name": 'Moti Mahal', "Add": 'Sadar', "type":'Chicken' },
      {"name": 'Roast', "Add": 'Sadar', "type":'Chicken'},
      {"name": 'Behrouz', "Add": 'Sadar', "type":'Chicken'},
      {"name": 'Wakil', "Add": 'Sadar', "type":'Chicken'},
      {"name": 'Babbu', "Add": 'Sadar', "type":'Mutton'},
      {"name": 'Babbu', "Add": 'Mominpura', "type":'Mutton'},
      {"name": 'Kareem', "Add":  'Sadar', "type":'Mutton'},
      {"name": 'Moti Mahal', "Add": 'Sadar', "type":'Mutton' },
      {"name": 'Roast', "Add": 'Sadar', "type":'Mutton'},
      {"name": 'Behrouz', "Add": 'Sadar', "type":'Mutton'},
      {"name": 'Wakil', "Add": 'Sadar', "type":'Mutton'}
    ];
  }

}
