import { Component, OnInit, numberAttribute } from '@angular/core';
import { CartMeal, Meals } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  menusItem: CartMeal[] = []

  totalprice:number = 0

  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void {
    
    this.getMealData()
    

  }

  // getMealData2():void{
  //   let curr_user_data = localStorage.getItem('current_user_auth')
  //   if(curr_user_data){
  //     let curr_user_data_obj = JSON.parse(curr_user_data)
  //     if(curr_user_data_obj[0].items != undefined){

  //       let arr_of_cart_items:CartMeal[] = curr_user_data_obj[0].items

  //       console.log("========================")
  //       console.log(arr_of_cart_items)
  //       console.log("========================")

  //       // var map = new Map()

  //       // arr_of_cart_items.forEach(i=>{
  //       //   if(map.has(i)){
  //       //     map.set(i,map.get(i)+1)
  //       //   }else{
  //       //     map.set(i,1)
  //       //   }
  //       // })

  //       // for (let entry of map.entries()) {  
  //       //   console.log(entry[0], entry[1]);   
  //       // }  

  //       // arr_of_cart_items.forEach(item => {
          
  //       //   this.http.get<any>(`http://localhost:3000/products/${item.id}`).subscribe((result)=>{


  //       //     this.menusItem.push(result)
  //       //     console.log(this.menusItem)


  //       //   }) 
  //       // });
        
  //     }
  //   }
    
  // }

  getMealData():void{

    let s = localStorage.getItem('current_user_auth')
    if(s){
      const userData = JSON.parse(s);
    
    //     // Check if userData is available
      if (userData) {

        if(!userData[0].items){
          userData[0].items = []
        }
    //     // Add the new item to the items array

        let cart_data = userData[0].items;
        cart_data.forEach((ele:any)=>{

          if(ele.quantity == undefined){
            ele.quantity = 1
          }


          this.totalprice = this.totalprice+ (ele.price*ele.quantity)

        })
        this.menusItem = cart_data;

    //     // Update the userData in localStorage
        localStorage.setItem('current_user_auth', JSON.stringify(userData));

      }
    }
  }

  buy_now(id:number,price:number,quan:number){

  

    let buy_now_product = { id: id, price: price, quantity: quan };
    this.router.navigate(['payment'], { queryParams: { single_data: JSON.stringify(buy_now_product) } });


  }
  increment(id:number){

    const item = this.menusItem.find(item=>item.id == id)
    if(item){
      item.quantity++
      this.totalprice += item.price
    }


  }
  decrement(id:number){

    const item = this.menusItem.find(item=>item.id == id)
    if(item){
      if(item.quantity>1){
        item.quantity--
        this.totalprice -= item.price
      }else{
        const want_to_delete = confirm("if you reduce it quantity it will be deleted, want to delete?")
        if(want_to_delete){
          alert("item got deleted")
        }
      }
     
    }
    
  }

  checkoutPay(){
   
    // console.log(this.totalprice);
    this.router.navigate(['payment'],{queryParams: { data : this.totalprice}})
  }
  

}
