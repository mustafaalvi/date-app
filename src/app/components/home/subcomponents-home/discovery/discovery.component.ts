import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit {
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
