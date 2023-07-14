import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'meal-plan', component: MealPlanComponent },
  { path: 'profile-update', component: ProfileUpdateComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
