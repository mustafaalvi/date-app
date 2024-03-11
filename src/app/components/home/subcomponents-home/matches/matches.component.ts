import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../../../services/match.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: any[];

  constructor(private matchService: MatchService) { 
    this.matches = [];
  }

  ngOnInit(): void {
    // Fetch matches from the service
    this.matchService.getMatches().subscribe(
      (data:any[]) => {
        this.matches = data;
      }
    );
  }

  initiateChat(match: any): void {
    // Handle chat initiation
  }

  sendGift(match: any): void {
    // Handle sending gift
  }
}
