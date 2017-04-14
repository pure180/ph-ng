import { Component, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ph-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnDestroy {
  private routeSub: Subscription;
  constructor(private router: Router, private title: Title) {
    // TODO: use a service
    this.routeSub = this.router.events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) { return; }
      const newTitle =
        this.getDeepest(this.router.routerState.snapshot.root, 'title') || 'PaperHive';
      this.title.setTitle(newTitle);
    });
  }

  private getDeepest(snapshot: ActivatedRouteSnapshot, property: string) {
    let value = snapshot.data ? snapshot.data[property] : undefined;
    if (snapshot.firstChild) {
      value = this.getDeepest(snapshot.firstChild, property) || value;
    }
    return value;
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
