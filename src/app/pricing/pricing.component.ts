import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.pricingData = this.getData();
  }

  private getData (){
    return this.backend.getPricingPage();
  }
}
