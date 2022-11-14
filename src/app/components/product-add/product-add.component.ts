import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup?: FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup=this.fb.group({
      name:["", Validators.required],
      price:["", Validators.required],
      quantity:["", Validators.required],
      selected:[true, Validators.required],
      available:[true, Validators.required]
    });
  }

  onSaveProduct(){
    this.submitted=true;
    if(this.productFormGroup.invalid) return;
     this.productsService.saveProduct(this.productFormGroup.value)
     .subscribe(data=>{
         alert("success saving product")
     });
  }

  onSubmit(){
    alert(JSON.stringify(this.productFormGroup.value));
  }

}
