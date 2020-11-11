import {Product} from './product.model';

export class Advert {
  id: number;
  product: Product;
  seller: string;

  constructor(id: number, product: Product, seller: string) {
    this.id = id;
    this.product = product;
    this.seller = seller;
  }
}
