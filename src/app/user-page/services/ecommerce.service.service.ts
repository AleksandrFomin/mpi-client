import { Injectable } from '@angular/core';
import {ProductOrder} from '../../model/product-order.model';
import {ProductOrders} from '../../model/product-orders.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const PRODUCTS_API = 'http://localhost:8080/api/products/';
const ORDERS_API = 'http://localhost:8080/api/orders/';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class EcommerceService {
  private productOrder: ProductOrder;
  private orders: ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject();
  private ordersSubject = new Subject();
  private totalSubject = new Subject();

  private total: number;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    return this.http.get(PRODUCTS_API);
  }

  saveOrder(order: ProductOrders) {
    return this.http.post(ORDERS_API, order);
  }

  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next();
  }

  get SelectedProductOrder() {
    return this.productOrder;
  }

  set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next();
  }

  get ProductOrders() {
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
