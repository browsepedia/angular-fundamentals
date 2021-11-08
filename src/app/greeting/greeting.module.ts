import { NgModule } from '@angular/core';
import { GreetingComponent } from './greeting.component';

import { MatButtonModule } from '@angular/material/button';
import { LogMousePositionDirective } from './log-mouse-position.directive';
import { GreetingGroupComponent } from './greeting-group/greeting-group.component';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule],
  declarations: [
    GreetingGroupComponent,
    GreetingComponent,
    LogMousePositionDirective,
  ],
  exports: [GreetingGroupComponent],
  providers: [],
})
export class GreetingModule {}
