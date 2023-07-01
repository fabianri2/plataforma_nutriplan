import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8080/profiles';

  constructor(private http: HttpClient) { }

  updateProfile(profile: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${profile.id}`, profile);
  }
}
