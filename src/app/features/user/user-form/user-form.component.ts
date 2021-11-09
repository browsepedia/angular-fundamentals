import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  constructor() {
    // this.form.valueChanges.pipe(debounceTime(500)).subscribe(console.log);
  }

  @ViewChild(NgForm) public form!: NgForm;

  @Input() public set user(user: User) {
    // this.form.patchValue(user, { emitEvent: false });
    this.formValue = user;
  }

  public formValue!: User;

  logUser() {
    this.formValue.name = 'Vasile popa';
  }

  onNameChange(event: Event) {
    const element = event.target as HTMLInputElement;
    console.log(element.value);
  }

  // public form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  //   username: new FormControl('', Validators.required),
  // });
}
