import { Component, OnInit } from "@angular/core";
import { NavbarService } from "./navbar.service";
import { NavItem } from "./nav-item.model";
import { MenuService } from "../menu.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {

  constructor(private ns: NavbarService, private ms: MenuService) {}

  navItems: NavItem[] = [];

  ngOnInit() {
    this.ns.getItems().subscribe((data) => {
      this.navItems = data;
    });
  }

  toggleMenu() {
    this.ms.toggleMenu();
  }
}
