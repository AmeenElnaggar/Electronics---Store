import { Routes } from '@angular/router';
import { HomePageComponent } from './Features/home/page/home-page/home-page.component';
import { SignupPageComponent } from './Features/authentication/pages/signup-page/signup-page.component';
import { LoginPageComponent } from './Features/authentication/pages/login-page/login-page.component';
import { ProductPageComponent } from './Features/product/page/product-page/product-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:productName', component: ProductPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '' },
];
