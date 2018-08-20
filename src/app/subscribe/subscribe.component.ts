import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribeData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.subscribeData = this.getData();
  }

  private getData (){
    return this.backend.getSubscribePage();
  }
}
