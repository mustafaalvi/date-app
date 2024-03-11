import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8080/profiles'; // Replace with your API endpoint
  private mockUrl = './assets/mockProfiles.json';

  constructor(private http: HttpClient) {}

  // Example method to fetch profiles from the backend
  getProfiles(): Observable<any[]> {
    //Real
    //return this.http.get<any[]>(`${this.apiUrl}/profiles`);

    //Mock
    return this.http.get<any>(`${this.mockUrl}`);
  }

  // Example method to like a profile
  likeProfile(profileId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/profiles/${profileId}/like`, {});
  }

  // Example method to pass (dislike) a profile
  passProfile(profileId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/profiles/${profileId}/pass`, {});
  }
}
