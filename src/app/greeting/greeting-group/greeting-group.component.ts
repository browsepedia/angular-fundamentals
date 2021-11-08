import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GreetingService } from 'src/app/greeting.service';

@Component({
  selector: 'app-greeting-group',
  templateUrl: './greeting-group.component.html',
  styleUrls: ['./greeting-group.component.scss'],
  providers: [GreetingService],
})
export class GreetingGroupComponent {
  constructor() {}

  public greetings: number[] = [];

  @Input() public set numberOfGreetings(numberOfGreetings: number) {
    this.greetings = Array<number>(numberOfGreetings);
  }

  @Output() public add = new EventEmitter();
}
