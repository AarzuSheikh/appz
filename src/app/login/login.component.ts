import { Component, OnInit } from '@angular/core';


import { from } from 'rxjs';
import { Dataprovider } from '../dataprovider';

import {Router} from '@angular/router';
import { DataproviderService } from '../dataprovider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datap :Dataprovider[];
  public isauth:boolean=false;

  constructor(private dataprovider : DataproviderService, private router:Router) { }

  ngOnInit() {
    this.dataprovider.getdata().subscribe(restodo => this.datap = restodo);
  }

  sub(firstname,pass){
    var obj = {
      firstname:firstname,
      password:pass,
    };
    var result = this.dataprovider.checkauth(obj).toPromise().then(dt=> this.isauth=dt);
    if(this.isauth){
      alert("Login Successfull... Please Wait redirecting ");
      // window.location.href = "/myprofile";
      this.router.navigateByUrl("page");
    }
    else{
      alert("Invalid login Password");
    }
}
}
