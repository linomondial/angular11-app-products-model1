import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';


const routes: Routes = [
  {path: "products" , component: ProductsComponent},
  {path: "newProduct" , component: ProductAddComponent},
  {path: "updateProduct/:id" , component: ProductUpdateComponent},
  {path: "" , component: HomeComponent},
  {path: "home" , component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
