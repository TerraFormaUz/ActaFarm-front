import { Component, NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "navbar-component, NavbarComponent",
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
    ngOnInit(): void {
    }
    constructor(private router: Router) { }
    
  goToResourseList() {
    this.router.navigateByUrl('/resource-list');
  }
  goToConsultantList() {
    this.router.navigateByUrl('/consultant-list');
  }
}