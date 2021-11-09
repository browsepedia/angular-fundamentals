import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';

import { PermissionService } from './core/permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _permissionService: PermissionService) {
    this.permission$ = this._permissionService.permission$;
  }

  public permission$: Observable<boolean> | null = null;

  public onAllowAccessChange(event: MatSlideToggleChange) {
    this._permissionService.setPermission(event.checked);
  }
}
