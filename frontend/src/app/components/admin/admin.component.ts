import { Component, OnInit } from '@angular/core';
import { ProductsService} from "../../services/products.service"
import Swal from "sweetalert2"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public productService: ProductsService ) { }

  ngOnInit(): void {
    this.executeService()
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
  updateService(){

  } 
  deleteService(){
    
  }
}
