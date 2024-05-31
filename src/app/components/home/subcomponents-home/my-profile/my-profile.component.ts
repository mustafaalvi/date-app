import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService) { 
    this.currentUser = "";
  }

  ngOnInit(): void {
    // Fetch current user profile from the service
    this.currentUser = this.userService.getCurrentUserProfile().subscribe(user => {
      this.currentUser = user;
    });
    console.log(this.currentUser);
  }
}
