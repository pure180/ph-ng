import { TestBed, async } from '@angular/core/testing';

import { RootComponent } from './root.component';
import { AppModule } from './app.module';
import { RoutingProviders } from './routing.test';

describe('RootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [...RoutingProviders],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a navbar', async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ph-navbar')).toBeTruthy();
  }));
});
