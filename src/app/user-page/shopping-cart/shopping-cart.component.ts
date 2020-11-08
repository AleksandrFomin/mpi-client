import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {AdvertOrders} from '../../model/advert-orders.model';
import {AdvertOrder} from '../../model/advert-order.model';
import {EcommerceService} from '../services/ecommerce.service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  orderFinished: boolean;
  orders: AdvertOrders;
  total: number;
  sub: Subscription;

  @Output() onOrderFinished: EventEmitter<boolean>;

  constructor(private ecommerceService: EcommerceService) {
    this.total = 0;
    this.orderFinished = false;
    this.onOrderFinished = new EventEmitter<boolean>();
  }

  ngOnInit() {
    this.orders = new AdvertOrders();
    this.loadCart();
    this.loadTotal();
  }

  private calculateTotal(products: AdvertOrder[]): number {
    let sum = 0;
    products.forEach(value => {
      sum += (value.advert.product.price * value.quantity);
    });
    return sum;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  finishOrder() {
    this.orderFinished = true;
    this.ecommerceService.Total = this.total;
    this.onOrderFinished.emit(this.orderFinished);
  }

  loadTotal() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.total = this.calculateTotal(this.orders.advertOrders);
    });
  }

  loadCart() {
    this.sub = this.ecommerceService.AdvertOrderChanged.subscribe(() => {
      let advertOrder = this.ecommerceService.SelectedProductOrder;
      console.log(advertOrder);
      if (advertOrder) {
        this.orders.advertOrders.push(new AdvertOrder(
          advertOrder.advert, advertOrder.quantity));
      }
      this.ecommerceService.AdvertOrders = this.orders;
      this.orders = this.ecommerceService.AdvertOrders;
      this.total = this.calculateTotal(this.orders.advertOrders);
    });
  }

  reset() {
    this.orderFinished = false;
    this.orders = new AdvertOrders();
    this.orders.advertOrders = []
    this.loadTotal();
    this.total = 0;
  }
}
