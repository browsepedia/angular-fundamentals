import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRouterModule } from './user.router-module';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { FilterUsersPipe } from './user-list/filter-users.pipe';
import { UserListContainerComponent } from './user-list/user-list-container/user-list-container.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AppSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [AppSharedModule, UserRouterModule],
  declarations: [
    UserComponent,
    UserListComponent,
    UserListContainerComponent,
    FilterUsersPipe,
    UserDetailsComponent,
    UserFormComponent,
  ],
})
export class UserModule {}
