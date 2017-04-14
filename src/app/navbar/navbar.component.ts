import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavItem } from './navitem';

const navItems: NavItem[] = [{
  name: 'Home',
  link: '',
  title: 'Home',
  routerLinkActiveOptions: {exact: true},
}, {
  name: 'About',
  link: 'about',
  title: 'About PaperHive',
}];

@Component({
  selector: 'ph-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private navItems = navItems;

  // TODO: do we actually need the ActivatedRoute here?
  constructor(private activatedRoute: ActivatedRoute) { }
}
