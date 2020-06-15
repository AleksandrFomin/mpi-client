import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from '../user-page/products/products.component';
import {ShoppingCartComponent} from '../user-page/shopping-cart/shopping-cart.component';
import {OrdersComponent} from '../user-page/orders/orders.component';
import {OrderDescriptionComponent} from './order-description/order-description.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  private collapsed = true;
  orderFinished = false;

  @ViewChild('orderDescriptionC', {static: false})
  productsC: OrderDescriptionComponent;

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
    // this.productsC.reset();
    // this.shoppingCartC.reset();
    // this.ordersC.submitted = false;
  }

  unfinishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }
}
