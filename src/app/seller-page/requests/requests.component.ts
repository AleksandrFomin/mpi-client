import {Component, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../model/order.model';
import {AdvertOrder} from '../../model/advert-order.model';
import {Subscription} from 'rxjs';
import {OrdersService} from '../../order-page/services/orders.service.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  orders: Order[] = [];
  advertOrders: AdvertOrder[] = [];
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
    this.ordersService.getAllOrdersBySeller()
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

  submit(order: Order) {
    // submit
  }
}
