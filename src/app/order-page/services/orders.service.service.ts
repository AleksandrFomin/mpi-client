import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../model/order.model';
import {Subject, Subscription} from 'rxjs';

const ORDERS_API = 'http://localhost:8080/api/orders/';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  private ordersSubject = new Subject();

  OrdersChanged = this.ordersSubject.asObservable();
  constructor(private http: HttpClient) {
  }

  getAllOrders() {
    return this.http.get(ORDERS_API);
  }

  getAllOrdersBySeller() {
    return this.http.get(ORDERS_API + 'seller');
  }

  getAllSubmittedOrders() {
    return this.http.get(ORDERS_API + 'carrier');
  }

  get Orders(): Order[] {
    return this.orders;
  }

  set Orders(value: Order[]) {
    this.orders = value;
    this.ordersSubject.next();
  }

  submit(order: Order) {
    return this.http.post(ORDERS_API + 'submit', order);
  }

  deliver(order: Order) {
    return this.http.post(ORDERS_API + 'deliver', order);
  }
}
