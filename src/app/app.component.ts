import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './models/role';
import { User } from './models/user';
import { LoginService } from './service/login.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  title = 'Customer Farm App';
  currentUser: User;

  constructor( private router: Router, private loginService: LoginService) {
             if (!sessionStorage.getItem('currentUser')) {

                this.router.navigate(['/login']);

             } else {

              this.getObservableUser(loginService.currentUser).subscribe(usr => this.currentUser = usr);

             }

     }

  getObservableUser(user: User): Observable<any> {

    return Observable.of(user);
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

}
