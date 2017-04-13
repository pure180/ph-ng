import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  private routeSub: Subscription;
  constructor(private router: Router, private title: Title) {}

  private getDeepest(snapshot: ActivatedRouteSnapshot, property: string) {
    let value = snapshot.data ? snapshot.data[property] : undefined;
    if (snapshot.firstChild) value = this.getDeepest(snapshot.firstChild, property) || value;
    return value;
  }

  ngOnInit() {
    this.routeSub = this.router.events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) return;

      this.title.setTitle(this.getDeepest(this.router.routerState.snapshot.root, 'title') || 'PaperHive');
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
