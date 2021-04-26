import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Product} from "../components/models/Products"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API=`http://localhost:5000/api`
  products:Product[]

  constructor(private http:HttpClient) {}

   getProducts(){
     return this.http.get<Product[]>(this.URL_API) 
   }
}
