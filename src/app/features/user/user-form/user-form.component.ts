import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
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
  constructor(private _builder: FormBuilder) {
    this.form = _builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: _builder.group(
        {
          password: ['', Validators.required],
          confirm: ['', Validators.required],
        },
        { validators: ConfirmPassword }
      ),
      roles: _builder.array([
        _builder.group({
          role: ['Administrator', Validators.required],
        }),
        _builder.group({
          role: ['Angajat', Validators.required],
        }),
      ]),
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

  public get passwordFormGroup(): FormGroup {
    return this.form.get('password') as FormGroup;
  }

  public get rolesControls(): FormGroup[] {
    const rolesCtrl = this.form.get('roles') as FormArray;
    return rolesCtrl.controls as FormGroup[];
  }

  public form!: FormGroup;

  addRole() {
    this.rolesControls.push(
      this._builder.group({
        role: ['Manager', Validators.required],
      })
    );
  }
}

const ConfirmPassword: ValidatorFn = (
  control: AbstractControl
): { [key: string]: any } | null => {
  const passwordCtrl = control.get('password') as FormControl;
  const confirmCtrl = control.get('confirm') as FormControl;

  if (passwordCtrl && confirmCtrl && passwordCtrl.value !== confirmCtrl.value) {
    return {
      match: false,
    };
  }

  return null;
};
