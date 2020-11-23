import {Component, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../model/order.model';
import {AdvertOrder} from '../../model/advert-order.model';
import {Subscription} from 'rxjs';
import {OrdersService} from '../../order-page/services/orders.service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  orders: Order[] = [];
  advertOrders: AdvertOrder[] = [];
  sub: Subscription;
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
    this.ordersService.getAllOrdersBySeller()
      .subscribe(
        (orders: any[]) => {
          this.orders = orders;
          // this.orders.forEach(order => {
          //   // this.advertOrders.push(new AdvertOrder(, 0));
          //   console.log(order.advertOrders);
          // });
        },
        (error) => console.log(error)
      );
  }

  submit(order: Order) {
    this.ordersService.submit(order).subscribe(response => {
      const index: number = this.orders.indexOf(order);
      if (index !== -1) {
        this.orders.splice(index, 1);
      }
    });
    this.orders = [];
    const currentRoute = this.router.url;
    console.log(this.orders);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
    });
    this.loadOrders();
    this.ordersService.Orders = this.orders;
  }
}
