import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfirm = control.get('password_confirm');
    if (password && passwordConfirm && password?.value != passwordConfirm?.value) {
      return { passwordMismatch: true };
    }
    return null;
  };
}