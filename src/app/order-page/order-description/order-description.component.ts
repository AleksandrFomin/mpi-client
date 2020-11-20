import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service.service';
import {Order} from '../../model/order.model';
import {AdvertOrder} from '../../model/advert-order.model';
import {Subscription} from 'rxjs';
import {Logger} from '@angular/compiler-cli/ngcc';

@Component({
  selector: 'app-order-description',
  templateUrl: './order-description.component.html',
  styleUrls: ['./order-description.component.css']
})
export class OrderDescriptionComponent implements OnInit {
  orders: Order[] = [];
  advertOrders: AdvertOrder[] = [];
  sub: Subscription;
  status: string;
  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.loadOrders();
    this.ordersService.Orders = this.orders;
    this.sub = this.ordersService.OrdersChanged.subscribe(() => {
      this.orders = this.ordersService.Orders;
    });
  }

  private calculateTotal(products: AdvertOrder[]): number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.advert.product.price * value.quantity);
    });
    return sum;
  }

  loadOrders() {
    this.ordersService.getAllOrders()
      .subscribe(
        (orders: any[]) => {
          this.orders = orders;
          console.log('orders');
          console.log(orders);
          // this.orders.forEach(order => {
          //   // this.advertOrders.push(new AdvertOrder(, 0));
          //   console.log(order.advertOrders);
          // });
        },
        (error) => console.log(error)
      );
  }
}
