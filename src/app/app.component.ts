import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable, of } from 'rxjs';

import { PermissionService } from './permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _permissionService: PermissionService) {
    this._permissionService.permission$.subscribe(
      (hasPermission: boolean) => (this.hasPermission = hasPermission)
    );

    this.numbers$ = of([1, 2, 3, 4]);
  }

  public title: string = 'Hello World';
  public numberOfInstances = 0;

  public numbers$!: Observable<number[]>;

  public hasPermission = true;

  public onGreetingClick(title: string): void {}

  public onAddGreeting() {
    this.numberOfInstances++;
  }

  public num = {
    firstName: 'Vasile',
    lastName: 'Popa',
  };

  public onAllowAccessChange(event: MatSlideToggleChange) {
    this._permissionService.setPermission(event.checked);
  }
}
