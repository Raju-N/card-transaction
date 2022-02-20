import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';

import { TextCaseTransformDirective } from './directives/text-case-transform.directive';

import { DigitSplitterPipe } from './pipes/digit-splitter.pipe';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TextCaseTransformDirective,
    DigitSplitterPipe,
    LoginComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, TextCaseTransformDirective, DigitSplitterPipe],
})
export class SharedModule {}
