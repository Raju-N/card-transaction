import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {
  static validIndianMobile(control: AbstractControl): ValidationErrors | null {
    const pattern = /([6-9])+/;
    if (!pattern.test(control.value)) return { validIndianMobile: true };
    return null;
  }

  static validMobile(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl) => {
      if (!pattern.test(control.value)) return { validIndianMobile: true };
      return null;
    };
  }
}
