import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  static route: Route = {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'PaperHive – Home',
    }
  };
}
