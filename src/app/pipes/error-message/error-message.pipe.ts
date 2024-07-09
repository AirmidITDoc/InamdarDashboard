import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { REGEX } from 'src/app/constants/validators';

@Pipe({
  name: 'errorMessage',
  standalone: true,
})
export class ErrorMessagePipe implements PipeTransform {
  transform(
    form: FormGroup,
    control: string,
    label: string,
    isTypeSelect: boolean = false
  ): string {
    if (form.get(control)?.touched || form.get(control)?.invalid) {
      const errors = form.get(control)?.errors;
  
      if (errors?.hasOwnProperty('required')) {
        return `Please ${isTypeSelect ? 'select' : 'enter'} the ${label}`;
      } else if (errors?.hasOwnProperty('minlength')) {
        return `Minimum ${errors['minlength'].requiredLength} characters required`;
      } else if (errors?.hasOwnProperty('maxlength')) {
        return `Maximum ${errors['maxlength'].requiredLength} characters required`;
      } else if (errors?.hasOwnProperty('email')) {
        return `Invalid Email Address`;
      } else if (errors?.hasOwnProperty('min')) {
        return `${label} should be greater than ${errors['min'].min}`;
      } else if (errors?.hasOwnProperty('max')) {
        return `${label} should be less than ${errors['max'].max}`;
      } else if (errors?.hasOwnProperty('pattern')) {
        if (
          control === 'password' ||
          control === 'confirmPassword' ||
          control === 'oldPassword'
        ) {
          return `${label} invalid`;
        } else {
          let pattern = errors['pattern'].requiredPattern;
          return this.PATTERN_ERRORS(pattern, label);
        }
      } else if (errors?.hasOwnProperty('passwordNotMatch')) {
        return `Your passwords do not match, please check.`;
      }
    }
    return '';
  }

  PATTERN_ERRORS(pattern: any, key: string) {
    console.error(pattern, key, 'pattern error is check!');
    let comment: any;
    if (pattern == REGEX.EMAIL) {
      comment = `Please enter the valid ${key}.`;
    } else if (pattern == REGEX.PASSWORD) {
      comment = `${key} can not contain blank spaces`;
    } else if (pattern == REGEX.NAME) {
      comment = `Please enter a valid ${key}`;
    } else if (pattern == REGEX.NUMBER) {
      comment = `${key} can contain only digits`;
    }
    return comment;
  }
}
