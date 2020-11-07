import { Component, OnInit } from '@angular/core';
import {AdsService} from '../services/ads-service.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
