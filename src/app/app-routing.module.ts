import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent },
  { path: 'recomendaciones', component: MealPlansComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
