import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, SignUp, Users } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit{

  
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,private router:Router){

  }
  showLogin = false
  authError:String = ""
  ngOnInit(): void {
    this.reloadSeller()
  }

  signUp(data : Users):void{
   
    this.userSignUp(data)
    
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  login(data : Login):void{
   
    // this.seller.userSignUp(data)

    this.authError = ""
    // console.log(data)
    this.userLogin(data)
    this.isLoginError.subscribe((error)=>{
      if(error){
        this.authError = "User Email or Password is not correct"
      }
    })
    
  }

  userLogin(data:Login){
    // console.log(data)

    this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe: 'response'})
    .subscribe((result:any) =>{
      if(result && result.body && result.body.length){
       
        let user_saved_data = result.body
        user_saved_data[0].items = []
        // console.log(user_saved_data[0])
        localStorage.setItem('current_user_auth',JSON.stringify(user_saved_data))
        this.router.navigate(['cart']);
    
      }else{
        
        this.isLoginError.emit(true)
      }
    })
  }

  userSignUp(data:Users){
    
    this.http.post('http://localhost:3000/users',
    data,{ observe: 'response'}).subscribe((result)=>{
    //  this.isSellerLoggedIn.next(true)
     // localStorage.setItem('seller',JSON.stringify(result.body))
     // this.router.navigate(['seller-home']);
 
     console.warn('result', result)
     this.showLogin = true
 
    })
 
    return false
   }

  openLogin():void{


    this.showLogin = true
  }

  openRegis():void{
    this.showLogin = false
  }

}
