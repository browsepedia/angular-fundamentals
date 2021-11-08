import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentComponent } from './department.component';

const routes: Route[] = [
  {
    path: '',
    component: DepartmentComponent,
    children: [
      {
        path: 'list',
        component: DepartmentListComponent,
      },
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRouterModule {}
 