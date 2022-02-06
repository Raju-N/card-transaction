import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextCaseTransform]',
})
export class TextCaseTransformDirective {
  @Input('appTextCaseTransform') textCase: string = '';

  constructor(private el: ElementRef) {}

  // @HostListener('focus') onFocus(){
  //   console.log("Inside Focus");
  // }

  @HostListener('blur') onBlur() {
    //console.log("I am blurred", this.textCase);
    const userInput = this.el.nativeElement.value;
    if (this.textCase === 'uppercase')
      this.el.nativeElement.value = userInput.toUpperCase();
    else if (this.textCase === 'lowercase')
      this.el.nativeElement.value = userInput.toLowerCase();
  }
}
