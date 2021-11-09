import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';
import { User } from '../user.model';
import { UserDataService } from './users.data-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _dataService: UserDataService) {
    this.users$ = this._users$.asObservable();

    this.filteredUsers$ = combineLatest([
      this.users$,
      this._filter$.asObservable(),
    ]).pipe(
      map(([users, filter]) =>
        users.filter(
          (user) => user.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
        )
      )
    );
  }

  private _users$ = new BehaviorSubject<User[]>([]);
  private _filter$ = new BehaviorSubject('');

  public users$: Observable<User[]> = of([]);
  public filteredUsers$: Observable<User[]> = of([]);

  public getAll(): Observable<User[]> {
    this._dataService
      .fetchUsers()
      .subscribe((users: User[]) => this._users$.next(users));

    return this._users$.asObservable();
  }

  public setFilter(filter: string): Observable<User[]> {
    this._filter$.next(filter);

    return this.filteredUsers$;
  }

  public getUser(userId: number): Observable<User> {
    return this._dataService.fetchUserById(userId);
  }
}
