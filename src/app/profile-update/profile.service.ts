import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  updateProfile(profile: any): Observable<any> {
    const url = `${this.apiUrl}/${profile.id}`;

    return this.http.put<any>(url, profile);
  }
}
