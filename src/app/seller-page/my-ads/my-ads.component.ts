import { Component, OnInit } from '@angular/core';
import {Advert} from '../../model/advert.model';
import {AdsService} from '../services/ads-service.service';


@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {
  adverts: Advert[] = [];

  constructor(private adsService: AdsService) {
  }

  reloadData() {
    this.adverts = [];
    this.loadAdverts();
  }

  ngOnInit() {
    this.reloadData();
  }

  loadAdverts() {
    this.adsService.getAllAdverts()
      .subscribe(
        (adverts: any[]) => {
          this.adverts = adverts;
        },
        (error) => console.log(error)
      );
  }

  deleteAdvert(advert: Advert) {
    this.adsService.deleteAdvert(advert).subscribe(response => {
      const index: number = this.adverts.indexOf(advert);
      if (index !== -1) {
        this.adverts.splice(index, 1);
      }
    });
  }
}
