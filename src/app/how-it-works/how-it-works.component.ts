import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  howitworksData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.howitworksData = this.getData();
  }

  private getData (){
    return this.backend.getHowitworksPage();
  }
}
