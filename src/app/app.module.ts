import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardSellerComponent } from './board-seller/board-seller.component';
import { BoardCarrierComponent } from './board-carrier/board-carrier.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ProductsComponent } from './user-page/products/products.component';
import { OrdersComponent } from './user-page/orders/orders.component';
import { ShoppingCartComponent } from './user-page/shopping-cart/shopping-cart.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderDescriptionComponent } from './order-page/order-description/order-description.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    BoardSellerComponent,
    BoardCarrierComponent,
    UserPageComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    OrderPageComponent,
    OrderDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
