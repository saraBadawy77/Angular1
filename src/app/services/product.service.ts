import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL:string="http://localhost:3005/products"
  mainbaseURL:string="http://localhost:3005/productmain"

  constructor( private http:HttpClient,private http2:HttpClient) { }
  
  getAllMainProducts(){
    return this.http2.get(this.baseURL)
  }

  getAllProducts(){
    return this.http.get(this.baseURL)
  }
 
  getProductById(productId:any){
    return this.http.get(`${this.baseURL}/${productId}`)
  }
 
  Addproduct(product:any){
    return this.http.post(this.baseURL,product)
  }
 
  updateProduct(product:any,productId:any){
    return this.http.put(`${this.baseURL}/${productId}`,product)
  }
  
  deleteProduct(productId:any){
    return this.http.delete(`${this.baseURL}/${productId}`)
  }


}
