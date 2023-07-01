import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealPlanService {
  private apiUrl = 'http://localhost:8080/meal-plans';

  constructor(private http: HttpClient) { }

  getMealPlan(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/1`);
  }
}
