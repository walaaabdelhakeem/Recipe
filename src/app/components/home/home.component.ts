import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatamealService } from '../../core/services/datameal.service';
import { RouterModule } from '@angular/router';
import { Icatogary } from '../../interfaces/icatogary';
import { Imeals } from '../../interfaces/imeals';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private dataService = inject(DatamealService);

  categories: Icatogary[] = [];
  meals: Imeals[] = [];
  activeCategory: string = 'all';

  ngOnInit(): void {
    this.getCategories();
    this.getMeals(); // Load default meals
    this.getmealsall();
  }

  getCategories(): void {
  
    this.dataService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.categories;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }

  getMeals(category: string = ''): void {
    this.activeCategory = category || 'all';
    this.dataService.getMealsByCategory(category).subscribe({
      next: (res) => {
        this.meals = res.meals || [];
      },
      error: (err) => {
        console.error('Error fetching meals:', err);
      }
    });
  }
  getmealsall(){
    this.activeCategory='all'
    this.dataService.getsomemeals().subscribe({
    
    next:(res)=>{
    this.meals=res.meals
    }
   });}



}
