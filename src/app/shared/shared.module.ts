import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';

import { TextCaseTransformDirective } from './directives/text-case-transform.directive';

import { DigitSplitterPipe } from './pipes/digit-splitter.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    TextCaseTransformDirective,
    DigitSplitterPipe,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, TextCaseTransformDirective, DigitSplitterPipe],
})
export class SharedModule {}
