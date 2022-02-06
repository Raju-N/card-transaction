import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormReactiveComponent } from './application-form-reactive.component';

describe('ApplicationFormReactiveComponent', () => {
  let component: ApplicationFormReactiveComponent;
  let fixture: ComponentFixture<ApplicationFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
