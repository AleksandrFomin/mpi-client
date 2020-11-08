import {Component, OnInit, ViewChild} from '@angular/core';
import {AdvertsComponent} from './adverts/adverts.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {OrdersComponent} from './orders/orders.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;

  @ViewChild('advertsC', {static: false})
  advertsC: AdvertsComponent;

  @ViewChild('shoppingCartC', {static: false})
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC', {static: false})
  ordersC: OrdersComponent;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.advertsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.submitted = false;
  }

  unfinishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

}
