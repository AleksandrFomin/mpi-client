import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardCarrierComponent } from './board-carrier/board-carrier.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {UserPageComponent} from './user-page/user-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {NewAdComponent} from './seller-page/new-ad/new-ad.component';
import {MyAdsComponent} from './seller-page/my-ads/my-ads.component';
import {ForbiddenPageComponent} from './forbidden-page/forbidden-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserPageComponent },
  { path: 'orders', component: OrderPageComponent },
  { path: 'seller-ads', component: MyAdsComponent },
  { path: 'seller-new-ad', component: NewAdComponent },
  { path: 'carrier', component: BoardCarrierComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'forbidden', component: ForbiddenPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
