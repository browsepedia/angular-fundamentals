import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from './user.router-module';
import { UserListComponent } from './user-list/user-list.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterUsersPipe } from './user-list/filter-users.pipe';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [UserComponent, UserListComponent, FilterUsersPipe],
})
export class UserModule {}
