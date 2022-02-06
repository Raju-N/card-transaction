import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormTemplateDrivenComponent } from './application-form-template-driven.component';

describe('ApplicationFormTemplateDrivenComponent', () => {
  let component: ApplicationFormTemplateDrivenComponent;
  let fixture: ComponentFixture<ApplicationFormTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationFormTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
