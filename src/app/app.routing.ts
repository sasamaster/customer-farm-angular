
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerFarmComponent } from './customer-farm/customer-farm.component';
import { HomeComponent } from './home/home.component';
import { AuthguardService } from './service/authguard.service';

const appRoutes: Routes = [

     { path: 'login', component: LoginComponent },
     { path: '', component: HomeComponent, canActivate: [AuthguardService],
     children: [

        { path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'customer-farm', component: CustomerFarmComponent, canActivate: [AuthguardService]}
     ]},

     { path: '**', redirectTo: '/login'}

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
