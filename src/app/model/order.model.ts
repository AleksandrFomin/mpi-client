import {ProductOrder} from './product-order.model';

export class Order {
  id: number;
  status: string;
  productOrders: ProductOrder[];

  constructor(id: number, status: string, productOrders: ProductOrder[]) {
    this.id = id;
    this.status = status;
    this.productOrders = productOrders;
  }
}
