import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductOrders} from '../../model/product-orders.model';
import {Subscription} from 'rxjs';
import {EcommerceService} from '../services/ecommerce.service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderFinished: boolean;
  orders: ProductOrders;
  total: number;
  submitted: boolean;
  sub: Subscription;

  @Output() onReturnSave: EventEmitter<boolean>;
  @Output() onReturnReset: EventEmitter<void>;

  constructor(private ecommerceService: EcommerceService) {
    this.orderFinished = true;
    this.orders = this.ecommerceService.ProductOrders;
    this.onReturnSave = new EventEmitter<boolean>();
    this.onReturnReset = new EventEmitter<void>();
  }

  ngOnInit() {
    this.submitted = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.orders = this.ecommerceService.ProductOrders;
    });
    this.loadTotal();
  }

  submit() {
    this.submitted = true;
    this.ecommerceService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
      this.total = this.ecommerceService.Total;
    });
  }

  back() {
    this.orderFinished = false;
    this.onReturnSave.emit(this.orderFinished);
    if (this.submitted) {
      this.onReturnReset.emit();
    }
  }
}
