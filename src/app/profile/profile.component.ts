import { Component, OnInit } from '@angular/core';
import { DataproviderService } from '../dataprovider.service';
import { from } from 'rxjs';
import { Dataprovider } from '../dataprovider';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataprovider : DataproviderService) { }
  firstname ="";
  // email="";
  password="";
  
  private proobj=new Dataprovider();

  ngOnInit() {
    this.proobj=this.dataprovider.sendservice();
    this.firstname=this.proobj.firstname;
    // this.email=this.proobj.email;
    this.password=this.proobj.password;

  }



  
}
