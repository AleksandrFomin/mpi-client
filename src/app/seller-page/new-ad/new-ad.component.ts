import { Component, OnInit } from '@angular/core';
import {AdsService} from '../services/ads-service.service';
import {Advert} from '../../model/advert.model';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.css']
})
export class NewAdComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isCreateFailed = false;
  errorMessage = '';
  product: Product;
  advert: Advert;

  constructor(private adsService: AdsService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isSuccessful = false;
    this.isCreateFailed = false;
    this.product = new Product(null, this.form.name, this.form.price, '');
    this.advert = new Advert(null, this.product);
    this.adsService.createAd(this.advert).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isCreateFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isCreateFailed = true;
      }
    );
  }
}
