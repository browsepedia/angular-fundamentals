import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionService } from './permission.service';

type CanActivateResult =
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;

@Injectable()
export class CanSeeUserGuard implements CanActivate {
  constructor(private _service: PermissionService) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): CanActivateResult {
    return this._service.permission;
  }
}
