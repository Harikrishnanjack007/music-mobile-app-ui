import { Component, OnInit } from '@angular/core';
import { fade, fadeEnter, fadeInDown, fadeOut } from './animations/animation';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fadeOut,fadeEnter,fadeInDown,fade]
})
export class AppComponent implements OnInit{


  initialCartValue=0;
  productDetails:any;

  constructor(private productService:ProductService){}


  ngOnInit(){
    this.productService.findAll().subscribe((data:any)=>{
      this.productDetails=data;
    });
  }

  removeData(index:number){
    this.productDetails.splice(index,1)
  }

}
