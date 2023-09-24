import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'',component:UserHomeComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"seller-home",component:HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path:"login",component:UserAuthComponent,
    // canActivate: [AuthGuard]
  },

  {
    path:"payment",component:PaymentComponent,
    // canActivate: [AuthGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
