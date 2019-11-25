import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  userFromApi: User;

  constructor(
     private userService: UserService,
     private loginService: LoginService,
     private router: Router

  ) {

    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit() {}

  returnLogin() {

    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
