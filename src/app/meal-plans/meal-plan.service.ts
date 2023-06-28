import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MealPlanService } from './meal-plan.service';
@Component({
  selector: 'app-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.css']
})
export class MealPlansComponent implements OnInit {

  constructor(private mealPlanService: MealPlanService) {
  }

  ngOnInit(): void {
  }
}
@Injectable({
  providedIn: 'root'
})
export class MealPlanService {
  private apiUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu API
  private plan: any;

  constructor(private http: HttpClient) { }

  getMealPlans(): Observable<any> {
    // Realiza una solicitud HTTP POST a tu API para guardar el plan de comidas en la base de datos
    return this.http.post<any>(`${this.apiUrl}/meal-plans`, this.plan);
  }

}
