import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Customer } from '../models/customer';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`api/users`);
  }

  getById(id: number) {
    return this.http.get<User>(`api/users/${id}`);
  }

  getCustomerByUserId(id: number) {
    return this.http.get<Customer>(`/api/users/customer/${id}`);
  }

}
