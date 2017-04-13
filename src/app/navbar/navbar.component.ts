import { Component, OnInit } from '@angular/core';
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
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private navItems = navItems;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}