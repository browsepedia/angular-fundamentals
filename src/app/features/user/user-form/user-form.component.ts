import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  constructor(_builder: FormBuilder) {
    this.form = _builder.group({
      name: ['', MinLengthValidator(5)],
      email: ['', Validators.required],
      username: ['', Validators.required],
    });

    this.form.valueChanges.pipe(debounceTime(500)).subscribe(console.log);
  }

  @Input() public set user(user: User) {
    this.form.patchValue(user, { emitEvent: false });
    this.formValue = user;
  }

  public formValue!: User;

  submitForm() {
    console.log(this.form.getRawValue());
  }

  public form!: FormGroup;
}

const MinLengthValidator = (minLength: number): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (
      control.value &&
      typeof control.value === 'string' &&
      control.value.length < minLength
    ) {
      return {
        requiredLength: minLength,
        actualLength: control.value.length,
      };
    }

    return null;
  };
};

const RequiredValidator: ValidatorFn = (
  control: AbstractControl
): { [key: string]: any } | null => {
  if (!control.value) {
    return {
      required: true,
      minLength: true,
    };
  }

  return null;
};
