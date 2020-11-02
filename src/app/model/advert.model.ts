import {Product} from './product.model';

export class Advert {
  product: Product;

  constructor(product: Product) {
    this.product = product;
  }
}
