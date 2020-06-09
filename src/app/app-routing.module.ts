import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardSellerComponent } from './board-seller/board-seller.component';
import { BoardCarrierComponent } from './board-carrier/board-carrier.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  { path: 'home', component: UserPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'seller', component: BoardSellerComponent },
  { path: 'carrier', component: BoardCarrierComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
