import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.portfolioData = this.getData();
  }

  private getData (){
    return this.backend.getPortfolioPage();
  }
}
