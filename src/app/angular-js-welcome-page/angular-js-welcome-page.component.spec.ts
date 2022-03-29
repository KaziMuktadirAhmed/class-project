import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJsWelcomePageComponent } from './angular-js-welcome-page.component';

describe('AngularJsWelcomePageComponent', () => {
  let component: AngularJsWelcomePageComponent;
  let fixture: ComponentFixture<AngularJsWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularJsWelcomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularJsWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
