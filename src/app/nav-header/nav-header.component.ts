import { Component, OnInit } from '@angular/core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  faLaptop = faLaptop;

  constructor() { }

  ngOnInit() {
  }

  setActive(event: any){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    event.currentTarget.className = "nav-item active"
  }

}
