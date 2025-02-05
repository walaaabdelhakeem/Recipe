import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MealdetailsComponent } from './components/mealdetails/mealdetails.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:"home"},
    { path: 'mealdetails/:id', component: MealdetailsComponent }
    
];
