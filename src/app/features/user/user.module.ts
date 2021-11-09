import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from './user.router-module';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilterUsersPipe } from './user-list/filter-users.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListContainerComponent } from './user-list/user-list-container/user-list-container.component';
import { MatIconModule } from '@angular/material/icon';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    UserComponent,
    UserListComponent,
    UserListContainerComponent,
    FilterUsersPipe,
    UserDetailsComponent,
  ],
})
export class UserModule {}
