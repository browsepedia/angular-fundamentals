import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private _http: HttpClient) {}

  public fetchUsers(): Observable<User[]> {
    return this._http.get<User[]>('users');
  }

  public fetchUserById(userId: number): Observable<User> {
    return this._http.get<User>(`users/${userId}`);
  }
}
