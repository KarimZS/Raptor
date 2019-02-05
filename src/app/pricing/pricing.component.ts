import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingData = {
      tiers:{}
  };
  activeTier = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.pricingData = this.getData();
    this.activeTier = this.pricingData.tiers[1];
    
  }

  private getData (){
    return this.backend.getPricingPage();
  }
}
