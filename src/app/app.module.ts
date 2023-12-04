import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { NavPart2Component } from './nav-part2/nav-part2.component';
import { NavPart3Component } from './nav-part3/nav-part3.component';
import { NavSectionComponent } from './nav-section/nav-section.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LogoComponent,
    NavPart2Component,
    NavPart3Component,
    NavSectionComponent,
    FirstpageComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
