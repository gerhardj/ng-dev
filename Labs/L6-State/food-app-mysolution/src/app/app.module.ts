import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidemenuComponent } from "./shared/sidemenu/sidemenu.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from './about/about/about.component';
import { MaterialExampleModule } from "src/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoadingComponent } from './shared/loading/loading.component';
import { LoadingInterceptor } from "./shared/loading-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    HomeComponent,
    AboutComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialExampleModule,
    FlexLayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ]
})
export class AppModule {}
