import {Advert} from './advert.model';

export class AdvertOrder {
  advert: Advert;
  quantity: number;

  constructor(advert: Advert, quantity: number) {
    this.advert = advert;
    this.quantity = quantity;
  }
}
