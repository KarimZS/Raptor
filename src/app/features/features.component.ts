import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  featureData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.featureData = this.getData();
  }

  private getData (){
    return this.backend.getFeaturesPage();
  }
}
