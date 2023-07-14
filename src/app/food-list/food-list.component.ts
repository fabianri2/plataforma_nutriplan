import { Component, OnInit } from '@angular/core';
import { Food } from './food.model';
import { FoodService } from './food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods:  Food[] = [
    { name: 'Comida 1', category: 'Categoría 1', calories: 100 },
    { name: 'Comida 2', category: 'Categoría 2', calories: 200 },
    { name: 'Comida 3', category: 'Categoría 3', calories: 300 }
  ];

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.getFoods()
      .subscribe(
        {
          next: (response: any) => {
            this.foods = response;
          },
          error: (error: any) => {
            console.error('Error retrieving foods', error);
          }
        }
      );
  }
}
