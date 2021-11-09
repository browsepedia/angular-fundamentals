import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private _httpClient: HttpClient) {
    this.users$ = this._httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  public users$: Observable<User[]> | null = null;

  ngOnInit() {}
}
