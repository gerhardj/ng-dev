import { Component, OnInit } from '@angular/core';
import { NavItem } from './nav-item';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private ns: NavbarService) { }

  navItems: NavItem[] = [];

  ngOnInit(): void {
    this.ns.getItems().subscribe(data => {
      this.navItems = data;
    })
  }

}
