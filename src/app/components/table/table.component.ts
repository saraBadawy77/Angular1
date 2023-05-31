import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  constructor(private productservices:ProductService  ) { }
  product:any;
  ngOnInit(): void {
    this.productservices.getAllProducts().subscribe({
      next: (respons) => {
        this.product= respons;
      },
      error: (error) => {
        console.log(error);
      }
    })

    
    
  }

  Delete(productid:any){
this.productservices.deleteProduct(productid).subscribe((respons)=>
{
  this.product=this.product.filter((item:any)=>item.id !=productid);
});
  }

}
