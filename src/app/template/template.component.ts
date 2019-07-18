import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }
   onSubmit(password,cpassword){
     if(password.value == cpassword.value)
    alert('Connected ')
    else
    alert('Enter correct password')
  }

  onSubmit1(){
    alert('connected')
  }

  ngOnInit() {
  }

}
