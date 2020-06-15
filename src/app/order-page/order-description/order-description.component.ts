import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service.service';
import {Order} from '../../model/order.model';
import {ProductOrder} from '../../model/product-order.model';
import {Subscription} from 'rxjs';
import {Logger} from '@angular/compiler-cli/ngcc';

@Component({
  selector: 'app-order-description',
  templateUrl: './order-description.component.html',
  styleUrls: ['./order-description.component.css']
})
export class OrderDescriptionComponent implements OnInit {
  orders: Order[] = [];
  productOrders: ProductOrder[] = [];
  sub: Subscription;
  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.loadOrders();
    this.ordersService.Orders = this.orders;
    this.sub = this.ordersService.OrdersChanged.subscribe(() => {
      this.orders = this.ordersService.Orders;
    });
  }

  loadOrders() {
    this.ordersService.getAllOrders()
      .subscribe(
        (orders: any[]) => {
          this.orders = orders;
          console.log(orders);
          // this.orders.forEach(order => {
          //   // this.productOrders.push(new ProductOrder(product, 0));
          //   console.log(order.productOrders);
          // });
        },
        (error) => console.log(error)
      );
  }
}
