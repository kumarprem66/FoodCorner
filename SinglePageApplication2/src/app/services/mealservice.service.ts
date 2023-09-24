import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealserviceService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  getMeals():Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
