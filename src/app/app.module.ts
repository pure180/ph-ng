import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './navbar/navbar.component';
import { RootComponent } from './root.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    RootComponent,
    NavbarComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
