import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

// @Injectable permet de deinir la classe comme service
@Injectable({
  providedIn: 'root' /* cela signifie que le service est disponible dans 
  toute la racine du projet donc on n'a plus besoin de le declarer dans file app.module.ts*/
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  //url : string = "http://localhost:3000/products/";
  getAllProducts(): Observable<Product[]>{
    //let url= (Math.random()>0.1)?environment.host:environment.unreachableHost;
    let url=environment.host;
    //return this.http.get<Products[]>(this.url);
    return this.http.get<Product[]>(url+"/products");
}

getSelectedPoducts(): Observable<Product []>{
    let url=environment.host;
    //return this.http.get<Products[]>(this.url);
    return this.http.get<Product[]>(url+"/products?selected=true");
}

getAvailableProducts(): Observable<Product []>{
    let url=environment.host;
    //return this.http.get<Products[]>(this.url);
    return this.http.get<Product[]>(url+"/products?available=true");
}

searchProducts(keyword:string): Observable<Product []>{
    let url=environment.host;
    //return this.http.get<Products[]>(this.url);
    return this.http.get<Product[]>(url+"/products?name_like="+keyword);
}

selectProduct(product:Product): Observable<Product>{
    let url=environment.host;
    product.selected=!product.selected;
    return this.http.put<Product>(url+"/products/"+product.id,product);
}

deleteProduct(product:Product): Observable<void>{
    let url=environment.host;
    return this.http.delete<void>(url+"/products/"+product.id);
}

saveProduct(product:Product): Observable<Product>{
    let url=environment.host;
    return this.http.post<Product>(url+"/products",product);
}

getProduct(id:number): Observable<Product>{
    let url=environment.host;
    return this.http.get<Product>(url+"/products/"+id);
}

updateProduct(product:Product): Observable<Product>{
    let url=environment.host;
    return this.http.put<Product>(url+"/products/"+product.id,product);
}

}
