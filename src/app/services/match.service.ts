import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl = 'http://localhost:8080/api/matches'; // Replace with your API endpoint
  private mockUrl = './assets/mockMatches.json';

  constructor(private http: HttpClient) {}

  // Example method to fetch matches from the backend
  getMatches(): Observable<any[]> {
    //Real
    //return this.http.get<any[]>(`${this.apiUrl}/matches`);

    //Mock
    return this.http.get<any>(`${this.mockUrl}`);

  }

  // Example method to initiate chat with a match
  initiateChat(matchId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/matches/${matchId}/chat`, {});
  }

  // Example method to send a virtual gift to a match
  sendGift(matchId: number, giftId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/matches/${matchId}/gifts`, { giftId });
  }
}
