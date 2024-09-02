import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { CheckoutComponent } from './components/checkout-area/checkout/checkout.component';
import { Page404Component } from './components/layout-area/page404/page404.component';
import { LoginComponent } from './components/auth-area/login/login.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent}, 
    {path: "checkout", component: CheckoutComponent}, 
    {path: "login", component: LoginComponent}, 
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "**" , component:Page404Component}
];
