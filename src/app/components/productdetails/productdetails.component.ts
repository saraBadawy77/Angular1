import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  

  constructor(private activatedRoute: ActivatedRoute,private productservic:ProductService){}
 productId:any;
 product:any;
  ngOnInit(): void {
    this.productId=this.activatedRoute.snapshot.paramMap.get("id")
    this.productservic.getProductById(this.productId).subscribe((respons)=>
    { this.product=respons
     }
    )
    
  }


}
