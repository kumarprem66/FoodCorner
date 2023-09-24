import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MealserviceService } from '../services/mealservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  constructor(private http:HttpClient,private mealSerice:MealserviceService){}
  ngOnInit(): void {
    
    // this.http.get('http://127.0.0.1:8000/menu/').subscribe((res)=>{
    //   console.log(res)
    // })

    this.mealSerice.getMeals().subscribe(data => {
      console.log(data)
    })
  }

}
