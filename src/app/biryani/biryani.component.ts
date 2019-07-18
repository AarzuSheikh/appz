import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.css']
})
export class BiryaniComponent implements OnInit {
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
