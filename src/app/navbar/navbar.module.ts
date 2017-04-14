import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { RoutingModule } from '../routing.module';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
})
export class NavbarModule { }
