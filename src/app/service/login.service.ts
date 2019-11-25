import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  private baseUrl = 'http://localhost:8080/api';
  public currentUser: User;
  constructor(private http: HttpClient) {

    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

   }

  login(post): Observable <any> {

    console.log(post);
    const loginUrl = this.baseUrl + '/users/login';
    return this.http.post(loginUrl, post).pipe(map(
                 user => {

                        sessionStorage.setItem('currentUser', JSON.stringify(user));
                        return user;
                 })
    );
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }

}
