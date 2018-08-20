import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.homeData = this.getData();
  }

  getData(){
    return this.backend.getHomePage();
  }

}
