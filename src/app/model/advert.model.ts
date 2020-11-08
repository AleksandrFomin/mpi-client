import {Product} from './product.model';

export class Advert {
  id: number;
  product: Product;

  constructor(id: number, product: Product) {
    this.id = id;
    this.product = product;
  }
}
