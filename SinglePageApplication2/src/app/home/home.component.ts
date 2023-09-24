import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Meal, Meals } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  menusItem: Meals[] | undefined
  updatedish : any | undefined

  showEditPopup = false;
  selectedItem: any = {}; // Placeholder for the selected item being edited



  constructor(private http:HttpClient){}

  ngOnInit(): void {

    this.getMealData();
   
  }


  postDate(meal:Meals){

    this.http.post('http://localhost:3000/products',meal).subscribe((res)=>{

      console.log(res)
    })

  }

  generateRandomPrice():number{

    const minPrice = 100
    const maxPrice = 1000
    return Math.floor(Math.random()*(maxPrice-minPrice)+1) + minPrice
  }

  refreshPage(): void{
    setTimeout(function() {
      location.reload(); // Reload the page
    }, 1000); // Set the timeout to 1000 milliseconds (1 second)
  }


  deleteDish(id:number){
    const confirmDelete = confirm("Are you sure want to delete this dish?")
    if (confirmDelete){
      this.http.delete(`http://localhost:3000/products/${id}`).subscribe((res)=>{
      
      this.getMealData()
     })
    }
   
  }

  getMealData():void{
    this.http.get<Meals[]>('http://localhost:3000/products?_page=1&_limit=20').subscribe((result)=>{

    this.menusItem = result


  }) 
  }

  showEditPopupFun(id:number):void{
  
    // event.preventDefault()
    this.showEditPopup = true;
    this.http.get<any>(`http://localhost:3000/products/${id}`).subscribe((res)=>{
      
    this.selectedItem = res;
   
  })
  }

  updateDish(data:any){

    const confirmDelete = confirm("Are you sure want to update this dish?")
    if (confirmDelete){
      this.http.put(`http://localhost:3000/products/${data.id}`,data).subscribe((res)=>{
      
      alert("dish updated sucessfully")
      this.getMealData()
        
      })
    }
   
    this.showEditPopup = false;
  
  }


  // openEditPopup(item: any): void {
  //   this.selectedItem = { ...item };
  //   this.showEditPopup = true;
  // }

  saveChanges(): void {
    // Logic to save changes to the selected item
    // You can update your menusItem array with the edited data
    this.showEditPopup = false;
  }

  closeEditPopup(): void {
    this.showEditPopup = false;
  }
}
