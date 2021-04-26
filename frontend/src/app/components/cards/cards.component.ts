import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service"

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    console.log(this.productService.getProducts())
    
  }
  executeService(){
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res
        console.log(res)
        return this.productService.products
      },
      err => {
        this.productService.products = err
        return this.productService.products
      }
    )
  }
}
