import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Farm } from '../models/farm';
import { CustomerService } from '../service/customer.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Role } from '../models/role';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-customer-farm',
  templateUrl: './customer-farm.component.html',
  styleUrls: ['./customer-farm.component.css']
})
export class CustomerFarmComponent implements OnInit {

  currentUser: User;
  customer: Customer = new Customer();
  customerId: number;
  public farms: Farm[];

  constructor(private loginService: LoginService, private userService: UserService, private customerService: CustomerService) {
      this.currentUser = this.loginService.currentUser;

      userService.getCustomerByUserId(this.currentUser.id).subscribe((data) => { this.customer = data;

      console.log('Customer:', this.customer);
      this.customerId = data.id;
      customerService.getCustomerFarmById(this.customerId).subscribe( f => this.farms = f);
       }
      );
  }

  ngOnInit() {


  }

}
