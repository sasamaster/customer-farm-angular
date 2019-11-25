import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  loginErr = false;
  usernameMsg = 'Please enter username';
  passwordMsg = 'Plsease enter password';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginservice: LoginService,
    public router: Router) {
      // redirect to home if already logged in

      if (this.loginservice.currentUser) {

        this.router.navigate(['/']);
      }

    }

  ngOnInit() {
    this.loginForm = this.fb.group({

      'username' : ['', Validators.required],
      'password' : ['', Validators.required],
    }) ;

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  userLogin() {

    if (this.loginForm.invalid) {

      return;
    }
    this.loginservice.login(this.loginForm.value).pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            this.loginErr = error;
        });
   }

}
