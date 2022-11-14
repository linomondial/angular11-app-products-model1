import { Component, OnInit } from '@angular/core';
import { ProductsService } from './service/products.service';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'web-cat-app';
  
  constructor(private rs : ProductsService) { }

  columns=["Product Id","Product Name","Price","Quantity","Selected","Available"];

  index= ["id","name","price","quantity","selected","available"];

  products: Product [] =[];

  ngOnInit(): void {
  
    this.rs.getAllProducts().subscribe
    (
      (response)=>
      {
        this.products=response;
        console.log("product list"+ this.products);
      },

      (error)=> 
      {
        console.log("Error Occured : "+ error);
      }
    )

  }
}
