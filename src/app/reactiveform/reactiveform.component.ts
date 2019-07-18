import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Dataprovider } from '../dataprovider';
import { DataproviderService } from '../dataprovider.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  name= new FormControl('');
  profileform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor(private dataproviderservice:DataproviderService) { }
  datap:Dataprovider[];
  react(){
    console.log(this.profileform.value);
    console.log(this.profileform.value.address.street);
    
    
  }

  ngOnInit() {
    this.dataproviderservice.getdata().subscribe(restodo => this.datap = restodo);
  }


}
