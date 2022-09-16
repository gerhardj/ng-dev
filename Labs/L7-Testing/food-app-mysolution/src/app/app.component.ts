import { Component } from "@angular/core";
import { LoadingService } from "./shared/loading.service";
import { MenuService } from "./shared/menu.service";
import { SidemenuComponent } from "./shared/sidemenu/sidemenu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  mode: 'over'|'side' = 'side';

  constructor(public ms: MenuService, public ls: LoadingService) {}

  ngOnInit() {
    this.ms.sideNavPosition.subscribe(data => this.mode = data);
  }
}
