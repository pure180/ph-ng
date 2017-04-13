import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  static route: Route = {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'PaperHive – 404 page not found',
      httpCode: 404,
    },
  }
}
