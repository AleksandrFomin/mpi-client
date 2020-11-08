import {AdvertOrder} from './advert-order.model';

export class Order {
  id: number;
  status: string;
  advertOrders: AdvertOrder[];

  constructor(id: number, status: string, advertOrders: AdvertOrder[]) {
    this.id = id;
    this.status = status;
    this.advertOrders = advertOrders;
  }
}
