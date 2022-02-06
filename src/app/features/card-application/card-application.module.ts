import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardApplicationComponent } from './card-application.component';
import { ApplicationFormTemplateDrivenComponent } from './components/application-form-template-driven/application-form-template-driven.component';
import { ApplicationFormReactiveComponent } from './components/application-form-reactive/application-form-reactive.component';

@NgModule({
  declarations: [
    CardApplicationComponent,
    ApplicationFormTemplateDrivenComponent,
    ApplicationFormReactiveComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CardApplicationModule {}
