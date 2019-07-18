import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizaa',
  templateUrl: './pizaa.component.html',
  styleUrls: ['./pizaa.component.css']
})
export class PizaaComponent implements OnInit {
  public searchText : string;
  public customerData : any;

  constructor() { }

  

  ngOnInit() {
    this.customerData = [
      {"name": 'Dominoz', "Add": 'Sadar'},
      {"name": 'Dominoz', "Add": 'Dharampeth'},
      {"name": 'Pizza Hut', "Add":  'Sadar'},
      {"name": 'Pizzenia', "Add": 'Sadar', },
      {"name": 'Roast', "Add": 'Sadar'},
      {"name": 'Toast', "Add": 'Sadar'},
      {"name": 'Toast', "Add": 'Dharampeth'}];
    
  }

}
