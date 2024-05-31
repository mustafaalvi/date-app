import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

interface UserResponse {
  imageUrl: string;
  name: string;
  age: string;
  location: string;
  // Add other fields if necessary
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // Replace with your API endpoint
  private mockUrl = './assets/mockUser.json';

  constructor(private http: HttpClient) {}

  // Example method to fetch current user's profile
  getCurrentUserProfile(): Observable<UserResponse> {
    //Real Call: 
    //return this.http.get<any>(`${this.apiUrl}/current`);
    
    //Mock Call:
    return this.http.get<UserResponse>(`${this.mockUrl}`);
  }

  // Example method to update user settings
  updateUserSettings(settings: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/settings`, settings);
  }
}
