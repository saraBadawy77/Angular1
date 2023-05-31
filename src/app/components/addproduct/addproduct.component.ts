import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productid:any;
  product:any
constructor(
  private productser:ProductService,
  private router: Router,
  private activatedRoute:ActivatedRoute
){}


  ngOnInit(): void {
    this.productid=this.activatedRoute.snapshot.paramMap.get('id')
    if(this.productid !=0)
    {
this.productser.getProductById(this.productid).subscribe((respons)=>{
this.product=respons;
this.getname.setValue(this.product.name)
this.getprice.setValue(this.product.price)
this.getquantity.setValue(this.product.Quantity)

})
    }
  }
  productform=new FormGroup({
name:new FormControl('',
[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
price:new FormControl('',
[Validators.required,Validators.min(50)]),
Quantity:new FormControl('',
[Validators.required,Validators.min(1)]),


  })
  get  getname(){
    return this.productform.controls['name']
  }
   get getprice(){
   return  this.productform.controls['price']
  }
  get getquantity(){
    return this.productform.controls['Quantity']
  }

  /////////////error/////////// 
  formOperation(e:Event){
    e.preventDefault();
    if( this.productform.status=='VALID'){

      if(this.productid==0){
       this.productser.Addproduct(this.productform.value).subscribe(()=>{})
      
       console.log("1111");
       
    
    }else{
     this.productser.updateProduct(this.productform.value,this.productid).subscribe()
     
      console.log("2222");
      
    }
   
    
    this.router.navigate(['/table'])}
    
  }

}
