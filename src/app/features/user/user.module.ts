import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from './user.router-module';

@NgModule({
  imports: [CommonModule, UserRouterModule],
  declarations: [UserComponent],
})
export class UserModule {}
