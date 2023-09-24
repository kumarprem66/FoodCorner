import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  menuType: string = 'default'
  sellerName:string = 'Login'
  cart_value:number = 0
  constructor(private route: Router){}

  ngOnInit(): void {
    // this.route.events.subscribe((val:any)=>{
    //   if(val.url){
    //     if(localStorage.getItem('seller') && val.url.includes('seller')){
        
    //       let sellerStored = localStorage.getItem('seller')
          
    //       let sellerData = sellerStored && JSON.parse(sellerStored)[0]
          
    //       this.sellerName = sellerData.name;
    //       this.menuType = "seller"




    //     }else{
          
    //       this.menuType = 'default'
    //     }

        
    //   }  

    // })


   


    let s = localStorage.getItem('current_user_auth')
      if(s){
        const userData = JSON.parse(s);

        if (userData) {
  
          if(!userData[0].items){
            userData[0].items = []
          }

          this.sellerName = userData[0].name
          this.cart_value = userData[0].items.length;

        }
      }
  }


  logout(){
    localStorage.removeItem("seller")
    this.route.navigate(['/'])
  }
}



