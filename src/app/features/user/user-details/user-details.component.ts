import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { UserService } from '../user-list/user.service';
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
    private _service: UserService,
    private router: Router
  ) {
    this.user$ = this.route.params.pipe(
      map((params) => parseInt(params['userId'])),
      tap((userId) => (this.userId = userId)),
      filter((userId) => !!userId),
      switchMap((userId: number) => this._service.getUser(userId))
    );
  }

  public user$: Observable<User> | null = null;
  public userId = 0;

  next() {
    this.router.navigateByUrl(`/users/details/${this.userId + 1}`);
  }
}
