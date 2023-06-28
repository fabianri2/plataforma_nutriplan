import { Component } from '@angular/core';
import { MealPlanService } from '/meal-plan.service.ts';
import {T} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.css']
})
export class MealPlansComponent {
  mealPlans: any[]; // Aquí se almacenarán los planes de comidas recomendados
  selectedMealPlan: any;
  showMealPlanDetails: boolean = false;
  dietaryRestrictions: string[] = [];
  preferences: string[] = [];
  restrictions: string[] = [];
  private plan: T;

  constructor(private mealPlanService: MealPlanService) {
    // Inicializar el array de planes de comidas (puedes obtener los datos de una API, servicio, etc.)
    this.restrictions = ['diabetes', 'hipertension', 'celiacos'];
    this.preferences = ['vegetariano', 'vegano', 'sin gluten'];
    this.dietaryRestrictions = ['diabetes', 'hipertension', 'celiacos'];
    this.mealPlans = [
      { name: 'Plan 1', description: 'Descripción del plan de comidas 1' },
      { name: 'Plan 2', description: 'Descripción del plan de comidas 2' },
      { name: 'Plan 3', description: 'Descripción del plan de comidas 3' },
    ];
  }

  ngOnInit(): void {
    this.getMealPlans(this.plan);
  }

  filterByPreferences(selectedPreference: string) {
    const preference = selectedPreference.toLowerCase();

    // Filtrar los planes de comidas por preferencias alimentarias
    this.mealPlans = this.mealPlans.filter(plan =>
      plan.preferences.map(p => p.toLowerCase()).includes(preference)
    );

    // Filtrar los planes de comidas por preferencias alimentarias
    if (selectedPreference === 'vegetariano') {
      // Filtrar los planes de comidas para mostrar solo los vegetarianos
      this.mealPlans = this.mealPlans.filter(plan => plan.preferences.includes('vegetariano'));
    } else if (selectedPreference === 'vegano') {
      // Filtrar los planes de comidas para mostrar solo los veganos
      this.mealPlans = this.mealPlans.filter(plan => plan.preferences.includes('vegano'));
    } else if (selectedPreference === 'sin gluten') {
      // Filtrar los planes de comidas para mostrar solo los sin gluten
      this.mealPlans = this.mealPlans.filter(plan => plan.preferences.includes('sin gluten'));
    }
    // Puedes agregar más condiciones según las preferencias que tengas y cómo estén representadas en tus datos

    // Aquí puedes realizar acciones adicionales después de filtrar los planes de comidas por preferencias
  }

  filterByRestrictions(selectedRestriction: string) {
    const restriction = selectedRestriction.toLowerCase();

    // Filtrar los planes de comidas por restricciones dietéticas
    this.mealPlans = this.mealPlans.filter(plan =>
      plan.dietaryRestrictions.map(r => r.toLowerCase()).includes(restriction)
    );
    if (selectedRestriction === 'diabetes') {
      // Filtrar los planes de comidas para mostrar solo los adecuados para personas con diabetes
      this.mealPlans = this.mealPlans.filter(plan => plan.restrictions.includes('diabetes'));
    } else if (selectedRestriction === 'hipertension') {
      // Filtrar los planes de comidas para mostrar solo los adecuados para personas con hipertensión
      this.mealPlans = this.mealPlans.filter(plan => plan.restrictions.includes('hipertension'));
    } else if (selectedRestriction === 'celiacos') {
      // Filtrar los planes de comidas para mostrar solo los adecuados para personas celíacas
      this.mealPlans = this.mealPlans.filter(plan => plan.restrictions.includes('celiacos'));
    }
    // Puedes agregar más condiciones según las restricciones que tengas y cómo estén representadas en tus datos

    // Aquí puedes realizar acciones adicionales después de filtrar los planes de comidas por restricciones
  }

  viewMealPlanDetails(plan: any) {
    this.selectedMealPlan = plan;
    this.showMealPlanDetails = true;
  }

  getMealPlans(plan: T): void {
    this.mealPlanService.getMealPlans().subscribe(
      (mealPlans) => {
        // Manejar los planes de comidas obtenidos
        this.mealPlans = mealPlans;
      },
      (error) => {
        // Manejar el error si ocurre
        console.error(error);
      }
    );
  }
}
