import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CanSeeUserGuard } from './can-see-user.guard';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'users',
    canActivate: [CanSeeUserGuard],
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./features/department/department.module').then(
        (m) => m.DepartmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
