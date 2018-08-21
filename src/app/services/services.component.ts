import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesData = {};
  constructor(private backend: BackendService) { }


  ngOnInit() {
    this.servicesData = this.getData();
  }

  private getData (){
    return this.backend.getServicesPage();
  }
}
