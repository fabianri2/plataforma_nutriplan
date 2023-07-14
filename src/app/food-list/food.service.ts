import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'http://localhost:8080/foods';

  constructor(private http: HttpClient) { }

  getFoods(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
