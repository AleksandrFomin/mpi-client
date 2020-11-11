import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advert} from '../../model/advert.model';

const ADS_API = 'http://localhost:8080/api/ads/';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private http: HttpClient) {
  }

  createAd(advert: Advert) {
    return this.http.post(ADS_API, advert);
  }

  getAllAdverts() {
    return this.http.get(ADS_API + 'seller');
  }

  deleteAdvert(advert: Advert) {
    return this.http.post(ADS_API + 'delete', advert);
  }
}
