import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent {
  constructor(public greetingService: GreetingService) {}

  @Input() public greeting: string = '';

  @Output() public greetingClick = new EventEmitter<string>();

  public onClick() {
    this.greetingService.greetEveryone('Hello Greeting Service');
    this.greetingClick.emit('New Title');
  }
}
