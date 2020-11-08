import { Injectable } from '@angular/core';
import {AdvertOrder} from '../../model/advert-order.model';
import {AdvertOrders} from '../../model/advert-orders.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const ADVERTS_API = 'http://localhost:8080/api/ads/user';
const ORDERS_API = 'http://localhost:8080/api/orders/';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class EcommerceService {
  private advertOrder: AdvertOrder;
  private orders: AdvertOrders = new AdvertOrders();

  private advertOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  private total: number;

  AdvertOrderChanged = this.advertOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllAdverts() {
    return this.http.get(ADVERTS_API);
  }

  saveOrder(order: AdvertOrders) {
    console.log('save');
    console.log(JSON.stringify(order));
    console.log(this.orders);
    return this.http.post(ORDERS_API, order);
  }

  set SelectedProductOrder(value: AdvertOrder) {
    this.advertOrder = value;
    this.advertOrderSubject.next();
  }

  get SelectedProductOrder() {
    return this.advertOrder;
  }

  set AdvertOrders(value: AdvertOrders) {
    this.orders = value;
    this.ordersSubject.next();
  }

  get AdvertOrders() {
    return this.orders;
  }

  get Total() {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next();
  }
}
