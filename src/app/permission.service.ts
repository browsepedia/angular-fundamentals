import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor() {}

  private _permission$ = new BehaviorSubject<boolean>(false);

  public setPermission(value: boolean): void {
    this._permission$.next(value);
    this._permission = value;
  }

  public get permission(): boolean {
    return this._permission;
  }

  public get permission$(): Observable<boolean> {
    return this._permission$.asObservable();
  }

  private _permission = false;
}
