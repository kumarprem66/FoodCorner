import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  myamount:string|null = "";
  // payment = ""

  hideSearch:boolean = false

  @ViewChild('paymentRef',{static: true}) paymentRef!:ElementRef

  constructor(private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {

      if(params.get('data')){
        this.myamount = params.get('data');
        console.log(this.myamount)
      }
      
      
      // const queryParams = ;
      // console.log(queryParams)
      // if (params.get('single_data')) {
      //   const idParam = params.get('id');
      //   const priceParam = params.get('price');
      //   const quantityParam = params.get('quantity');
    
      //   const id = idParam !== null ? +idParam : 0;
      //   const price = priceParam !== null ? +priceParam : 0;
      //   const quantity = quantityParam !== null ? +quantityParam : 0;
    
      //   console.log('ID:', id);
      //   console.log('Price:', price);
      //   console.log('Quantity:', quantity);
      // }

        if (params.get('single_data')) {
          const singleDataString = params.get('single_data');
          if(singleDataString){
            const singleData = JSON.parse(singleDataString);
          
            const id = singleData.id !== undefined ? +singleData.id : 0;
            this.myamount = singleData.price !== undefined ? singleData.price : "0";
            const quantity = singleData.quantity !== undefined ? +singleData.quantity : 0;
            
           
          }
         
        }
      });
      
     
    
    
   
    window.paypal.Buttons(
      {
        style:{
          layout:"horizontal",
          color: "blue",
          shape: "rect",
          label: 'paypal',
          width: '600px'
        },
        createOrder: (data: any,actions:any)=>{
          return actions.order.create(
            {
              purchase_units: [
                {
                  amount: {
                    value: this.myamount?.toString(),
                    currency_code: 'USD'
                  }
                }
              ]
            }
          )
        },
        onApprove: (data: any,actions: any)=>{
          return actions.order.capture().then((details: any)=>{
            // console.log(details)

            if(details.status === 'COMPLETED'){
              // this.payment.transactionID = details.id;
              alert("payment is successfull")
              this.router.navigate([''])

            }
          })
        },
        onError:(error:any)=>{

          console.log(error)
        }
      }
    ).render(this.paymentRef.nativeElement)
  }

  cancel(){
    this.router.navigate(['cart'])
  }
}
