import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  combineLatest,
  debounceTime,
  map,
  Observable,
  of,
  startWith,
} from 'rxjs';
import { User } from '../../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss'],
})
export class UserListContainerComponent implements OnInit {
  constructor(private _service: UsersService, private _router: Router) {
    const users$ = this._service.fetchUsers();

    const filter$: Observable<string> = this.filterCtrl.valueChanges.pipe(
      startWith(''),
      debounceTime(500)
    );

    this.filteredUsers$ = combineLatest([users$, filter$]).pipe(
      map(([users, filter]) =>
        users.filter(
          (user) => user.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
        )
      )
    );
  }

  public filteredUsers$: Observable<User[]> = of([]);
  public filterCtrl = new FormControl();

  ngOnInit() {}

  onUserEdit(user: User): void {
    this._router.navigateByUrl(`/users/details/${user.id}`);
  }
}
