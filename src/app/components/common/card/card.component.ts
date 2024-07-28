import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'] 
})
export class CardComponent implements OnInit{
  //todo: consider giving these a real type 
  @Input() image: string | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;

  profiles: any[];

  constructor(private profileService: ProfileService) { 
    this.profiles = [];
  }

  ngOnInit(): void {
    // Fetch profiles from the service
    this.profileService.getProfiles().subscribe(
      (data:any[]) => {
        this.profiles = data;
      }
    );
  }

  likeProfile(profile: any): void {
    // Handle like action
  }

  passProfile(profile: any): void {
    // Handle pass action
  }
}
