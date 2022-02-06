import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class AsyncValidator {
  static phoneNumberExists(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === '9876543210') resolve({ phoneNumberExist: true });
        resolve(null);
      }, 2000);
    });
  }
}
