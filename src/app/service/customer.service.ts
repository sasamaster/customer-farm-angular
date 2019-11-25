import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Farm } from '../models/farm';


@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Customer[]>(`/api/customers`);
  }

  getCustomerFarmById(id: number) {
    return this.http.get<Farm[]>(`/api/customers/farm/${id}`);
  }

}
