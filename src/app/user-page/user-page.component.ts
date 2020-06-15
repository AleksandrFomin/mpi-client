import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from './products/products.component';
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

  @ViewChild('productsC', {static: false})
  productsC: ProductsComponent;

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
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.submitted = false;
  }
}
