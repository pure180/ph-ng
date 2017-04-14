import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'ph-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  static route: Route = {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'PaperHive – About',
    },
  };
}
