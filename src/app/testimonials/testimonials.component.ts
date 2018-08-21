import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonialData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.testimonialData = this.getData();
  }

  private getData (){
    return this.backend.getTestimonialPage();
  }
}
