import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.contactData = this.getData();
  }

  private getData (){
    return this.backend.getContactPage();
  }

}
