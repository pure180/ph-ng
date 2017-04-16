import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'ph-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  static route: Route = {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'PaperHive – 404 page not found',
      httpCode: 404,
    },
  };
}
