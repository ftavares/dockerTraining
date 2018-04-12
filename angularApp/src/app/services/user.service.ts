import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {UserModel} from '../models/usermodel';


@Injectable()
export class UserService {

  apiUrl = 'http://localhost:5001';

  constructor(  private http: HttpClient) { }

  public getUserInfo(): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}/user`);
  }

}
