import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productId?:number;
  productFormGroup: FormGroup;
  submitted: boolean=false;

  constructor(private activatedRoute:ActivatedRoute, 
              private productsService: ProductsService,
              private fb:FormBuilder,
              private router: Router) { 
    this.productId=activatedRoute.snapshot.params.id;
  }

  ngOnInit():void {
    this.productsService.getProduct(this.productId)
    .subscribe(data=>{
        this.productFormGroup=this.fb.group({
          id:[data.id, Validators.required],
          name:[data.name, Validators.required],
          price:[data.price, Validators.required],
          quantity:[data.quantity, Validators.required],
          selected:[data.selected, Validators.required],
          available:[data.available, Validators.required]
        })
    });
  }

  onUpdateProduct(){
    this.productsService.updateProduct(this.productFormGroup.value)
    .subscribe(data=>{
      let v=confirm("Etes vous sure de vouloir modifier le produit?")
      if(v==true)
      this.router.navigateByUrl("/products")
      // Oppure un semplice Alert
      /*   let a=alert("Success Product Update");
           this.router.navigateByUrl("/products")*/
    });

 }
  }


