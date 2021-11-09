import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MY_INJECTION_TOKEN } from '@core/core.module';
import { debounceTime, Observable, of } from 'rxjs';
import { User } from '../../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss'],
})
export class UserListContainerComponent {
  constructor(
    private _service: UserService,
    private _router: Router,
    @Inject(MY_INJECTION_TOKEN) test: any
  ) {
    this._service.getAll();
    this.filteredUsers$ = this._service.filteredUsers$;

    this.filterCtrl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((filter: string) => this._service.setFilter(filter));

    console.log(test);
  }

  public filteredUsers$: Observable<User[]> = of([]);
  public filterCtrl = new FormControl();

  onUserEdit(user: User): void {
    this._router.navigateByUrl(`/users/details/${user.id}`);
  }
}
