import { Component, OnInit } from '@angular/core';
import {Order} from '../model/order.model';
import {AdvertOrder} from '../model/advert-order.model';
import {Subscription} from 'rxjs';
import {OrdersService} from '../order-page/services/orders.service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carrier-page',
  templateUrl: './carrier-page.component.html',
  styleUrls: ['./carrier-page.component.css']
})
export class CarrierPageComponent implements OnInit {
  orders: Order[] = [];
  advertOrders: AdvertOrder[] = [];
  sub: Subscription;
  errorMessage = '';
  failed = false;
  constructor(private ordersService: OrdersService, private router: Router) {
  }

  ngOnInit() {
    this.loadOrders();
    this.ordersService.Orders = this.orders;
    this.sub = this.ordersService.OrdersChanged.subscribe(() => {
      this.orders = this.ordersService.Orders;
    });
  }

  loadOrders() {
    this.ordersService.getAllSubmittedOrders()
      .subscribe(
        (orders: any[]) => {
          this.orders = orders;
        },
        (error) => console.log(error)
      );
  }

  deliver(order: Order) {
    this.ordersService.deliver(order).subscribe(
      data => {
      const index: number = this.orders.indexOf(order);
      if (index !== -1) {
        this.orders.splice(index, 1);
        this.failed = false;
        this.orders = [];
        this.ordersService.Orders = this.orders;
        console.log(this.orders);
        this.loadOrders();
        this.ordersService.Orders = this.orders;
      }
      },
      err => {
        this.errorMessage = err.error.message;
        this.failed = true;
      });
  }
}
