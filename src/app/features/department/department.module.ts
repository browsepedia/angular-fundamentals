import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentRouterModule } from './department.router-module';

@NgModule({
  imports: [CommonModule, DepartmentRouterModule],
  declarations: [DepartmentComponent, DepartmentListComponent],
})
export class DepartmentModule {}
