import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatamealService {
  private http = inject(HttpClient);
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories.php`);
  }
  getsomemeals():Observable<any>{
    return  this.http.get(`${this.baseUrl}/search.php?s`)
  
    }
    getMealDetails(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
    }
  getMealsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?c=${category}`);
  }
}
