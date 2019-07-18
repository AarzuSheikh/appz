import { Component, OnInit } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import {Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Dataprovider } from '../dataprovider';
  import { from } from 'rxjs';
import { DataproviderService } from '../dataprovider.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-formbl',
  templateUrl: './formbl.component.html',
  styleUrls: ['./formbl.component.css']
})
export class FormblComponent implements OnInit {
  profilename=this.fb.group({
    firstname:['',[Validators.required, Validators.minLength(6)]],
    lastname:['',[Validators.required, Validators.minLength(6)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmpassword:['']
  })
  submitted=false;
  constructor(private fb: FormBuilder,private router:Router,private dataproviderservice:DataproviderService,private cs:CookieService) { }
   datap:Dataprovider[];

  onSubmit1(password,confirmpassword){
    if(this.profilename.value.password == this.profilename.value.confirmpassword)
    alert('Connected you can register')
    else
    alert('Enter correct password ')

  }
  get f() { return this.profilename.controls; }
  onSubmit() {
    this.datap=this.profilename.value;
    this.submitted = true;

    // stop here if form is invalid
    if (this.profilename.invalid) {
        return;
    }

    alert('SUCCESS!')
    console.log(this.profilename.value);
    return this.dataproviderservice.postdata(this.datap).subscribe(restodo=>this.datap=restodo);
    
    this.router.navigateByUrl("mainpage");
}

  ngOnInit() {
    this.dataproviderservice.getdata().subscribe(restodo=>this.datap=restodo);
  }

  set(){
    alert(this.cs.set('test','testing cookie', 16));
  }

}
