import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamData = {};
  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.teamData = this.getData();
  }

  private getData (){
    return this.backend.getTeamPage();
  }
}
