import { Component, inject, OnInit } from '@angular/core';
import { Imealdetails } from '../../interfaces/imealdetails';
import { ActivatedRoute } from '@angular/router';
import { DatamealService } from '../../core/services/datameal.service';

@Component({
  selector: 'app-mealdetails',
  imports: [],
  templateUrl: './mealdetails.component.html',
  styleUrl: './mealdetails.component.scss'
})
export class MealdetailsComponent implements OnInit {
    meal: Imealdetails={} as Imealdetails;
    private route=inject(ActivatedRoute)
    private dataMealService=inject(DatamealService)
    mealiteams!:any;
    ngOnInit(): void {
      
      let mealId:string |null;
      mealId = this.route.snapshot.paramMap.get('id');
     if(mealId){
        this.dataMealService.getMealDetails(mealId).subscribe({
          next:(res)=>{
            this.meal=res.meals[0]
            this.componantmeal(this.meal)
            console.log(this.meal)
          },error:(err)=>{
            console.log(err)
          }
        })
      
}
} 
componantmeal(meal:any) {
  let arr=[]
  for(let i=1;i<=20;i++)
  {
    let strIngredient=meal[`strIngredient${i}`]
    console.log(strIngredient)
let strMeasure=meal[`strMeasure${i}`]
if(strMeasure!=""&&strIngredient!="")
{
  arr.push({strIngredient,strMeasure})
}
  }
  this.mealiteams=arr
  console.log(arr)
}}
