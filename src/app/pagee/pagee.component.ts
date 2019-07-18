import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagee',
  templateUrl: './pagee.component.html',
  styleUrls: ['./pagee.component.css']
})
export class PageeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

}

