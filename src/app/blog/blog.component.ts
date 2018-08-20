import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blogData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.blogData = this.getData();
  }

  private getData (){
    return this.backend.getBlogPage();
  }
}
