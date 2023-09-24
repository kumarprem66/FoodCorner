import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartMeal, Meal, Meals, Users } from '../data-type';
import { Router } from '@angular/router';
import { MealserviceService } from '../services/mealservice.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  menusItem: Meals[] | undefined
  // userdata:string|null = localStorage.getItem('current_user_auth') 
  // my_cart_item:any[] = []
  // Cart_button_text:string = "Add to Cart"
  selectedInstruction:string = ""

  showInstruction = false
  // meals: any[];

  constructor(private http:HttpClient,private router:Router,private mealService:MealserviceService){}

  ngOnInit(): void {

    this.getMealData();
   
  }

  getMealData():void{
    this.http.get<Meals[]>('http://localhost:3000/products?_page=1&_limit=20').subscribe((result)=>{


    this.menusItem = result


  }) 
  }

  // add_to_cart2(id:number){

   
  //   let flag = false
   
  //   if(this.userdata){
  //     const storeddata = JSON.parse(this.userdata)

  //     this.my_cart_item = storeddata || []

      

  //     if(this.my_cart_item != undefined){

  //       let allAddedCartitem:CartMeal[] = this.my_cart_item[0].items

  //       console.log(allAddedCartitem)
        
  //       console.log(allAddedCartitem.length)

  //       if( allAddedCartitem != undefined){
        

  //         allAddedCartitem.forEach((element: any) => {

          
  //           // if(element.id == id){
  //           //   element.quantity += 1
            
  //           //   this.my_cart_item[0].items.push(element)
  //           //   // localStorage.setItem('current_user_auth',JSON.stringify(this.my_cart_item))
  //           //   flag = true
  //           //   // return
  //           // }

  //           // console.log(element)
            
  //         })

  //         if(!flag){

  //           this.http.get<any>(`http://localhost:3000/products/${id}`).subscribe((result)=>{

  //           let cart_item = result
  //           cart_item.quantity = 1
  
  //           // console.log(cart_item)
           
  //           this.my_cart_item[0].items.push(cart_item)
  //           // console.log(this.my_cart_item)
  
  //           // localStorage.setItem('current_user_auth',JSON.stringify(this.my_cart_item))
           
  
  //         }) 
  
  //         }
  //       }

       
  //       // this.router.navigate(['cart']);
        

      
  //       // console.log(this.my_cart_item)

  //     }
    
     
      
  //   }else{
  //     this.router.navigate(['login'])
  //   }
    




  // }



  add_to_cart(id: number) {
    // Retrieve existing data from localStorage

   
    this.http.get<any>(`http://localhost:3000/products/${id}`).subscribe((result)=>{

    let item = result

    let s = localStorage.getItem('current_user_auth')
    if(s){
      const userData = JSON.parse(s);
    
    //     // Check if userData is available
      if (userData) {

        if(!userData[0].items){
          userData[0].items = []
        }
    //     // Add the new item to the items array

        let savedDish = userData[0].items;
        let temp = 0
        savedDish.forEach((element: any) => {
          
          if(element.id==id){
            temp = 1
            alert("this item is already in your cart")
          }
          
        });


        console.log(temp)

        if(temp==0){
          userData[0].items.push(item);
          alert("item added in your cart")
        }

    //     // Update the userData in localStorage
        localStorage.setItem('current_user_auth', JSON.stringify(userData));

        console.log('Item added to cart:', item);
      }
    }

    // console.log(item)

  }) 


    
  }


  giveInstruc(id:number){

    this.showInstruction = true;
    this.http.get<any>(`http://localhost:3000/products/${id}`).subscribe((res)=>{
      
    this.selectedInstruction = res.details;
    console.log(this.selectedInstruction)

   
  })

  }

  saveChanges(): void {
   
    this.showInstruction = false;
  }

  closeEditPopup(): void {
    this.showInstruction = false;
  }

  
}

