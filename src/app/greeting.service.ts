import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GreetingService {
  constructor() {}

  public index = 0;

  public greetEveryone(title: string): void {
    this.index++;
    console.log(this.index);
  }
}
