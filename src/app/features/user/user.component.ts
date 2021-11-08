import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PermissionService } from 'src/app/permission.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(
    private _permissionService: PermissionService,
    private router: Router
  ) {
    this._sub$ = this._permissionService.permission$.subscribe(
      (canActivate) => {
        if (this.router.url.indexOf('/users') > -1 && !canActivate) {
          this.router.navigateByUrl('/');
        }
      }
    );
  }

  private _sub$: Subscription | null = null;

  ngOnInit() {}

  ngOnDestroy() {
    this._sub$?.unsubscribe();
  }
}
