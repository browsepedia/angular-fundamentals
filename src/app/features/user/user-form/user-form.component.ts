import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  constructor() {
    this.form.valueChanges.pipe(debounceTime(500)).subscribe(console.log);
  }

  @Input() public set user(user: User) {
    this.form.patchValue(user, { emitEvent: false });
  }

  public form = new FormGroup({
    name: new FormControl('', Validators.minLength(3)),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });

  public get isValid(): boolean {
    return this.form.valid;
  }

  public get nameMinlengthError(): boolean {
    const control = this.form.get('name');
    if (control?.errors) {
      return control.errors['minlength'];
    }

    return false;
  }

  public get nameMinlengthErrorMessage() {
    if (this.nameMinlengthError) {
      const control = this.form.get('name') as FormControl;
      const error = control.errors && control.errors['minlength'];
      return error
        ? `Minlength is ${error.requiredLength}, currently at ${error.actualLength}`
        : '';
    }

    return '';
  }
}
