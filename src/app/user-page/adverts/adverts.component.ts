import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AdvertOrders} from '../../model/advert-orders.model';
import {AdvertOrder} from '../../model/advert-order.model';
import {EcommerceService} from '../services/ecommerce.service.service';
import {Advert} from '../../model/advert.model';

@Component({
  selector: 'app-products',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
  advertOrders: AdvertOrder[] = [];
  adverts: Advert[] = [];
  selectedProductOrder: AdvertOrder;
  private shoppingCartOrders: AdvertOrders;
  sub: Subscription;
  advertSelected: boolean = false;

  constructor(private ecommerceService: EcommerceService) {
  }

  ngOnInit() {
    this.advertOrders = [];
    this.loadAdverts();
    this.loadOrders();
  }

  addToCart(order: AdvertOrder) {
    this.ecommerceService.SelectedProductOrder = order;
    this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
    this.advertSelected = true;
  }

  removeFromCart(advertOrder: AdvertOrder) {
    let index = this.getAdvertIndex(advertOrder.advert);
    if (index > -1) {
      this.shoppingCartOrders.advertOrders.splice(
        this.getAdvertIndex(advertOrder.advert), 1);
    }
    this.ecommerceService.AdvertOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.ecommerceService.AdvertOrders;
    this.advertSelected = false;
  }

  getAdvertIndex(advert: Advert): number {
    return this.ecommerceService.AdvertOrders.advertOrders.findIndex(
      value => value.advert === advert);
  }

  isAdvertSelected(advert: Advert): boolean {
    return this.getAdvertIndex(advert) > -1;
  }

  loadAdverts() {
    this.ecommerceService.getAllAdverts()
      .subscribe(
        (products: any[]) => {
          this.adverts = products;
          this.adverts.forEach(advert => {
            this.advertOrders.push(new AdvertOrder(advert, 0));
          });
        },
        (error) => console.log(error)
      );
  }

  loadOrders() {
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.ecommerceService.AdvertOrders;
    });
  }

  reset() {
    this.advertOrders = [];
    this.loadAdverts();
    this.ecommerceService.AdvertOrders.advertOrders = [];
    this.loadOrders();
    this.advertSelected = false;
  }
}
