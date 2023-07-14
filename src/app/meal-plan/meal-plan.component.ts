import { Component, OnInit } from '@angular/core';
import { MealPlanService } from './meal-plan.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css']
})
export class MealPlanComponent implements OnInit{
  mealPlan: any;

  constructor(private mealPlanService: MealPlanService) { }

  ngOnInit(): void {
    this.getMealPlan();
  }

  getMealPlan(): void {
    this.mealPlanService.getMealPlan()
      .subscribe(
        {
      next: () => {
      },
      error: () => {
        console.error('Error retrieving meal plan');
      }
  });
  }
}

