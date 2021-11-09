import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CanSeeUserGuard } from 'src/app/can-see-user.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { UserComponent } from './user.component';

const routes: Route[] = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent,
      },
      {
        path: 'details',
        canActivate: [CanSeeUserGuard],

        component: UserDetailsComponent,
      },
      {
        path: 'roles',
        canActivate: [CanSeeUserGuard],
        component: UserRolesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRouterModule {}
