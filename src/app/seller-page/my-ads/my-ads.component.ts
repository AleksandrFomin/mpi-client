import { Component, OnInit } from '@angular/core';
import {AdsService} from '../services/ads-service.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isCreateFailed = false;
  errorMessage = '';

  constructor(private adsService: AdsService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.adsService.createAd(this.form).subscribe(
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
