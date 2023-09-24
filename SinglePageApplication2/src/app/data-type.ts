export interface Meals{
    id:number
    name:string,
    category:string
    price:number,
    details:string,
    image:string
}

export interface Meal {
    idMeal: string,
    strMeal: string,
    strInstructions: string,
    strMealThumb: string,
    strYoutube: string,
    strCategory:string
    // Add other properties as needed
}

export interface CartMeal {
  id:number
  name:string,
  category:string
  price:number,
  details:string,
  image:string,
  quantity:number
  // Add other properties as needed
}

  export interface Users{
    username:String,
    password:String,
    email:String,
    orders:number[]
}

export interface SignUp{
  name:String,
  password:String,
  email:String,
  orders:number[]
}

export interface Login{
  email:String,
  password:String
}
