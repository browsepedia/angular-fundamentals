import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { UsersService } from '../user-list/users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private _service: UsersService,
    private router: Router
  ) {
    this.user$ = this.route.params.pipe(
      map((params) => parseInt(params['userId'])),
      tap((userId) => (this.userId = userId)),
      filter((userId) => !!userId),
      switchMap((userId: number) => this._service.fetchUserById(userId))
    );
  }

  public user$: Observable<User> | null;
  public userId = 0;

  next() {
    this.router.navigateByUrl(`/users/details/${this.userId + 1}`);
  }
}
