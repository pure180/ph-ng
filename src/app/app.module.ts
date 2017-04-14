import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavbarModule } from './navbar/navbar.module';
import { RootComponent } from './root.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    NavbarModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule { }
