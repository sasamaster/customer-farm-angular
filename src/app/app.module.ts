import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerFarmComponent } from './customer-farm/customer-farm.component';
import { LoginService } from './service/login.service';
import { AuthguardService } from './service/authguard.service';
import { CustomerService } from './service/customer.service';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomerFarmComponent
  ],
  imports: [
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [AuthguardService, LoginService, UserService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
