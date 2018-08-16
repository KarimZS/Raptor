import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activetab;
  constructor() {
    if(!this.activetab)
    {
      this.activetab = "home";
    }
   }

  ngOnInit() {
  }

  getActiveTab(tabname: string)
  {
    this.activetab = tabname;
  }

}
